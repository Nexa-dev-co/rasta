import type { Metadata } from "next";
import { fontVariables } from "@/lib/fonts";
import { LanguageProvider } from "@/context/language-context";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FabMenu } from "@/components/layout/fab-menu";
import { Preloader } from "@/components/layout/preloader";
import "./globals.css";

// Runs synchronously before first paint: if the visitor has seen the intro
// before, mark <html> so CSS hides the preloader immediately (no flash).
const PRELOADER_GUARD = `try{if(localStorage.getItem('rasta_visited')){document.documentElement.setAttribute('data-returning','true')}}catch(e){}`;

export const metadata: Metadata = {
  title: "RASTA — Security Services & Close Protection",
  description:
    "Physical security, close protection, cyber security, and smart systems for compounds, malls, factories, healthcare, and VIP clients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Server render starts in English/LTR; LanguageProvider reconciles to the
  // visitor's saved preference on the client and updates <html lang/dir>.
  return (
    <html lang="en" dir="ltr" className={`${fontVariables} h-full antialiased`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: PRELOADER_GUARD }} />
      </head>
      {/* Browser extensions (e.g. ColorZilla's cz-shortcut-listen) inject
          attributes onto <body> before React hydrates; suppress the resulting
          mismatch warning since it originates outside our markup. */}
      <body
        className="flex min-h-full flex-col bg-background"
        suppressHydrationWarning
      >
        <Preloader />
        <LanguageProvider>
          <Navbar />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
          <FabMenu />
        </LanguageProvider>
      </body>
    </html>
  );
}
