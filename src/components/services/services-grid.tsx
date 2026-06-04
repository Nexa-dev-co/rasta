"use client";

import { useEffect, useState } from "react";
import { services, servicesById } from "@/data/services";
import { classNames } from "@/lib/class-names";
import { Reveal } from "@/components/ui/reveal";
import { ServiceTile } from "@/components/services/service-tile";
import { ServiceDrawer } from "@/components/services/service-drawer";

// Per-service grid spans build the asymmetric "bento" rhythm. VIP is the hero
// (2×2); cyber runs wide and smart runs tall to break the uniform grid. Larger
// spans only kick in at lg so the layout stays sane on small screens.
const bentoSpan: Record<string, string> = {
  "vip-protection": "col-span-2 row-span-2",
  "cyber-security": "lg:col-span-2",
  "smart-systems": "lg:row-span-2",
};

export function ServicesGrid() {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  // Deep links like /services#vip-protection open that service's drawer.
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && servicesById[hash]) {
      // Post-mount setState: the hash is only known on the client.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSelectedServiceId(hash);
    }
  }, []);

  const selectedService = selectedServiceId ? servicesById[selectedServiceId] ?? null : null;

  return (
    <>
      <div className="grid auto-rows-[minmax(13rem,auto)] grid-flow-row-dense grid-cols-2 gap-4 lg:grid-cols-4">
        {services.map((service, index) => (
          <Reveal
            key={service.id}
            delay={(index % 4) * 0.06}
            className={classNames("h-full", bentoSpan[service.id])}
          >
            <ServiceTile
              service={service}
              isActive={selectedServiceId === service.id}
              onSelect={() => setSelectedServiceId(service.id)}
            />
          </Reveal>
        ))}
      </div>

      <ServiceDrawer service={selectedService} onClose={() => setSelectedServiceId(null)} />
    </>
  );
}
