import {
  Building2,
  ShoppingBag,
  Trophy,
  HeartPulse,
  Factory,
  Crown,
  Lock,
  Cctv,
  ClipboardList,
  Lightbulb,
  CalendarDays,
} from "lucide-react";
import type { Service, ServiceFormFieldOption } from "@/types/service";

// Reused option sets, declared once so the data below stays readable.
const yesNoOptions: ServiceFormFieldOption[] = [
  { value: "yes", labelEn: "Yes", labelAr: "نعم" },
  { value: "no", labelEn: "No", labelAr: "لا" },
];

// PROTOTYPE: Arabic copy is a first pass and needs a native review before launch.
export const services: Service[] = [
  {
    id: "compounds",
    icon: Building2,
    titleEn: "Compound Security",
    titleAr: "تأمين الكمبوندات",
    descriptionEn:
      "Layered access control, patrol routes, and gate management for residential compounds.",
    descriptionAr:
      "تحكم متعدد المستويات في الدخول، ومسارات دوريات، وإدارة بوابات للكمبوندات السكنية.",
    formFields: [
      { name: "numberOfGates", type: "number", labelEn: "Number of gates", labelAr: "عدد البوابات", required: true },
      { name: "averageDailyVisitors", type: "number", labelEn: "Average daily visitors", labelAr: "متوسط الزوار يوميًا", required: false },
      { name: "areaSquareMeters", type: "number", labelEn: "Area size (sqm)", labelAr: "المساحة (متر مربع)", required: true },
      { name: "numberOfBuildings", type: "number", labelEn: "Number of buildings", labelAr: "عدد المباني", required: false },
      { name: "existingSecurityMeasures", type: "textarea", labelEn: "Existing security measures", labelAr: "إجراءات التأمين الحالية", required: false },
    ],
  },
  {
    id: "malls",
    icon: ShoppingBag,
    titleEn: "Mall Security",
    titleAr: "تأمين المولات",
    descriptionEn:
      "Crowd flow management, surveillance coverage, and incident response for retail centers.",
    descriptionAr:
      "إدارة حركة الحشود، وتغطية المراقبة، والاستجابة للحوادث في المراكز التجارية.",
    formFields: [
      { name: "numberOfFloors", type: "number", labelEn: "Number of floors", labelAr: "عدد الطوابق", required: true },
      { name: "numberOfEntrances", type: "number", labelEn: "Number of entrances", labelAr: "عدد المداخل", required: true },
      { name: "operatingHours", type: "text", labelEn: "Operating hours", labelAr: "ساعات العمل", required: false },
      { name: "averageDailyFootfall", type: "number", labelEn: "Average daily footfall", labelAr: "متوسط عدد الزوار يوميًا", required: false },
      { name: "numberOfAnchorStores", type: "number", labelEn: "Number of anchor stores", labelAr: "عدد المتاجر الرئيسية", required: false },
    ],
  },
  {
    id: "clubs",
    icon: Trophy,
    titleEn: "Club Security",
    titleAr: "تأمين النوادي",
    descriptionEn:
      "Member screening, event coverage, and facility protection for sporting and social clubs.",
    descriptionAr:
      "فحص الأعضاء، وتأمين الفعاليات، وحماية المرافق للنوادي الرياضية والاجتماعية.",
    formFields: [
      {
        name: "clubType",
        type: "select",
        labelEn: "Club type",
        labelAr: "نوع النادي",
        required: true,
        options: [
          { value: "sports", labelEn: "Sports", labelAr: "رياضي" },
          { value: "social", labelEn: "Social", labelAr: "اجتماعي" },
          { value: "golf", labelEn: "Golf", labelAr: "جولف" },
        ],
      },
      { name: "numberOfMembers", type: "number", labelEn: "Number of members", labelAr: "عدد الأعضاء", required: false },
      { name: "peakHours", type: "text", labelEn: "Peak hours", labelAr: "ساعات الذروة", required: false },
      { name: "numberOfCourts", type: "number", labelEn: "Number of courts / fields", labelAr: "عدد الملاعب", required: false },
      { name: "indoorOutdoorSplit", type: "text", labelEn: "Indoor / outdoor split", labelAr: "التقسيم بين الداخلي والخارجي", required: false },
    ],
  },
  {
    id: "healthcare",
    icon: HeartPulse,
    titleEn: "Healthcare Facility Security",
    titleAr: "تأمين المنشآت الصحية",
    descriptionEn:
      "Access governance, asset protection, and round-the-clock cover for medical facilities.",
    descriptionAr:
      "حوكمة الدخول، وحماية الأصول، وتغطية على مدار الساعة للمنشآت الطبية.",
    formFields: [
      {
        name: "facilityType",
        type: "select",
        labelEn: "Facility type",
        labelAr: "نوع المنشأة",
        required: true,
        options: [
          { value: "hospital", labelEn: "Hospital", labelAr: "مستشفى" },
          { value: "clinic", labelEn: "Clinic", labelAr: "عيادة" },
          { value: "pharmacy-chain", labelEn: "Pharmacy chain", labelAr: "سلسلة صيدليات" },
        ],
      },
      { name: "numberOfBedsOrBranches", type: "number", labelEn: "Number of beds or branches", labelAr: "عدد الأسرّة أو الفروع", required: false },
      { name: "operatesTwentyFourSeven", type: "select", labelEn: "24/7 operation", labelAr: "تعمل على مدار الساعة", required: true, options: yesNoOptions },
      { name: "hasEmergencyDepartment", type: "select", labelEn: "Emergency department", labelAr: "قسم طوارئ", required: false, options: yesNoOptions },
    ],
  },
  {
    id: "factories",
    icon: Factory,
    titleEn: "Factory Security",
    titleAr: "تأمين المصانع",
    descriptionEn:
      "Perimeter control, shift-based guarding, and inventory protection for industrial sites.",
    descriptionAr:
      "التحكم في المحيط، والحراسة حسب الورديات، وحماية المخزون للمواقع الصناعية.",
    formFields: [
      { name: "industryType", type: "text", labelEn: "Industry type", labelAr: "نوع الصناعة", required: true },
      { name: "areaSquareMeters", type: "number", labelEn: "Factory area (sqm)", labelAr: "مساحة المصنع (متر مربع)", required: false },
      { name: "numberOfShifts", type: "number", labelEn: "Number of shifts", labelAr: "عدد الورديات", required: false },
      { name: "numberOfEmployees", type: "number", labelEn: "Number of employees", labelAr: "عدد الموظفين", required: false },
      { name: "typeOfGoodsStored", type: "text", labelEn: "Type of goods stored", labelAr: "نوع البضائع المخزنة", required: false },
    ],
  },
  {
    id: "vip-protection",
    icon: Crown,
    titleEn: "VIP Personal Protection",
    titleAr: "تأمين الشخصيات الهامة",
    descriptionEn:
      "Discreet close protection details, route planning, and convoy security for principals.",
    descriptionAr:
      "فرق حماية شخصية متحفظة، وتخطيط المسارات، وتأمين المواكب للشخصيات.",
    isPremium: true,
    formFields: [
      { name: "principalFullName", type: "text", labelEn: "Full name of principal", labelAr: "الاسم الكامل للشخصية", required: true },
      { name: "nationality", type: "text", labelEn: "Nationality", labelAr: "الجنسية", required: false },
      { name: "numberOfProtectionDays", type: "number", labelEn: "Number of protection days", labelAr: "عدد أيام الحماية", required: true },
      {
        name: "dailyScheduleType",
        type: "select",
        labelEn: "Daily schedule type",
        labelAr: "نوع الجدول اليومي",
        required: false,
        options: [
          { value: "fixed", labelEn: "Fixed", labelAr: "ثابت" },
          { value: "variable", labelEn: "Variable", labelAr: "متغير" },
        ],
      },
      {
        name: "travelScope",
        type: "select",
        labelEn: "Travel",
        labelAr: "السفر",
        required: false,
        options: [
          { value: "domestic", labelEn: "Domestic", labelAr: "داخلي" },
          { value: "international", labelEn: "International", labelAr: "دولي" },
        ],
      },
      { name: "numberOfConvoyVehicles", type: "number", labelEn: "Vehicles in convoy", labelAr: "عدد مركبات الموكب", required: false },
    ],
  },
  {
    id: "cyber-security",
    icon: Lock,
    titleEn: "Cyber Security",
    titleAr: "الأمن السيبراني",
    descriptionEn:
      "Threat assessments, monitoring, and incident response to protect your digital assets.",
    descriptionAr:
      "تقييم المخاطر، والمراقبة، والاستجابة للحوادث لحماية أصولك الرقمية.",
    formFields: [
      {
        name: "organizationSize",
        type: "select",
        labelEn: "Organization size",
        labelAr: "حجم المؤسسة",
        required: true,
        options: [
          { value: "1-50", labelEn: "1–50 employees", labelAr: "1–50 موظف" },
          { value: "51-200", labelEn: "51–200 employees", labelAr: "51–200 موظف" },
          { value: "201-1000", labelEn: "201–1000 employees", labelAr: "201–1000 موظف" },
          { value: "1000+", labelEn: "1000+ employees", labelAr: "أكثر من 1000 موظف" },
        ],
      },
      { name: "currentSecurityTools", type: "textarea", labelEn: "Current security tools in use", labelAr: "أدوات الأمن المستخدمة حاليًا", required: false },
      {
        name: "specificConcern",
        type: "select",
        labelEn: "Specific concern",
        labelAr: "مصدر القلق الأساسي",
        required: false,
        options: [
          { value: "data-breach", labelEn: "Data breach", labelAr: "تسرب البيانات" },
          { value: "ransomware", labelEn: "Ransomware", labelAr: "برامج الفدية" },
          { value: "compliance", labelEn: "Compliance", labelAr: "الامتثال" },
          { value: "other", labelEn: "Other", labelAr: "أخرى" },
        ],
      },
      {
        name: "preferredEngagement",
        type: "select",
        labelEn: "Preferred engagement",
        labelAr: "نوع التعاون المفضل",
        required: false,
        options: [
          { value: "assessment", labelEn: "Assessment", labelAr: "تقييم" },
          { value: "ongoing-monitoring", labelEn: "Ongoing monitoring", labelAr: "مراقبة مستمرة" },
          { value: "incident-response", labelEn: "Incident response", labelAr: "الاستجابة للحوادث" },
        ],
      },
    ],
  },
  {
    id: "smart-systems",
    icon: Cctv,
    titleEn: "Smart Security Systems",
    titleAr: "أنظمة الأمن الذكية",
    descriptionEn:
      "CCTV, access control, alarms, and intercoms designed and integrated end to end.",
    descriptionAr:
      "كاميرات مراقبة، وتحكم في الدخول، وإنذارات، وأنظمة اتصال داخلي مصممة ومتكاملة.",
    formFields: [
      { name: "propertyType", type: "text", labelEn: "Property type", labelAr: "نوع العقار", required: true },
      { name: "areaSquareMeters", type: "number", labelEn: "Area (sqm)", labelAr: "المساحة (متر مربع)", required: false },
      {
        name: "requiredSystems",
        type: "select",
        labelEn: "Primary required system",
        labelAr: "النظام المطلوب الأساسي",
        required: true,
        options: [
          { value: "cctv", labelEn: "CCTV", labelAr: "كاميرات مراقبة" },
          { value: "access-control", labelEn: "Access control", labelAr: "تحكم في الدخول" },
          { value: "alarm", labelEn: "Alarm", labelAr: "إنذار" },
          { value: "intercom", labelEn: "Intercom", labelAr: "اتصال داخلي" },
        ],
      },
      { name: "hasExistingInfrastructure", type: "select", labelEn: "Existing infrastructure", labelAr: "بنية تحتية قائمة", required: false, options: yesNoOptions },
    ],
  },
  {
    id: "security-plans",
    icon: ClipboardList,
    titleEn: "Security Planning",
    titleAr: "وضع الخطط الأمنية",
    descriptionEn:
      "Tailored security strategies, risk mapping, and phased implementation roadmaps.",
    descriptionAr:
      "استراتيجيات أمنية مخصصة، ورسم خرائط المخاطر، وخطط تنفيذ على مراحل.",
    formFields: [
      { name: "organizationType", type: "text", labelEn: "Organization type", labelAr: "نوع المؤسسة", required: true },
      { name: "currentSecurityGaps", type: "textarea", labelEn: "Current security gaps", labelAr: "الثغرات الأمنية الحالية", required: false },
      { name: "implementationTimeline", type: "text", labelEn: "Timeline for implementation", labelAr: "الجدول الزمني للتنفيذ", required: false },
      {
        name: "budgetRange",
        type: "select",
        labelEn: "Budget range",
        labelAr: "نطاق الميزانية",
        required: false,
        options: [
          { value: "under-100k", labelEn: "Under 100k", labelAr: "أقل من 100 ألف" },
          { value: "100k-500k", labelEn: "100k – 500k", labelAr: "100 – 500 ألف" },
          { value: "500k-plus", labelEn: "500k+", labelAr: "أكثر من 500 ألف" },
        ],
      },
    ],
  },
  {
    id: "consulting",
    icon: Lightbulb,
    titleEn: "Security Consulting",
    titleAr: "الاستشارات الأمنية",
    descriptionEn:
      "Expert advisory on assessments, audits, and operational security improvements.",
    descriptionAr:
      "استشارات متخصصة في التقييمات، والمراجعات، وتحسين الأمن التشغيلي.",
    formFields: [
      { name: "consultationTopic", type: "text", labelEn: "Topic of consultation", labelAr: "موضوع الاستشارة", required: true },
      {
        name: "preferredFormat",
        type: "select",
        labelEn: "Preferred format",
        labelAr: "الصيغة المفضلة",
        required: false,
        options: [
          { value: "on-site", labelEn: "On-site visit", labelAr: "زيارة ميدانية" },
          { value: "remote", labelEn: "Remote", labelAr: "عن بُعد" },
          { value: "written-report", labelEn: "Written report", labelAr: "تقرير مكتوب" },
        ],
      },
      {
        name: "urgency",
        type: "select",
        labelEn: "Urgency",
        labelAr: "درجة الإلحاح",
        required: false,
        options: [
          { value: "immediate", labelEn: "Immediate", labelAr: "فوري" },
          { value: "within-a-month", labelEn: "Within a month", labelAr: "خلال شهر" },
          { value: "planning-phase", labelEn: "Planning phase", labelAr: "مرحلة التخطيط" },
        ],
      },
    ],
  },
  {
    id: "events",
    icon: CalendarDays,
    titleEn: "Event Security",
    titleAr: "تأمين الفعاليات",
    descriptionEn:
      "Accreditation, crowd control, and entry management for conferences and large events.",
    descriptionAr:
      "الاعتماد، والتحكم في الحشود، وإدارة الدخول للمؤتمرات والفعاليات الكبرى.",
    formFields: [
      { name: "eventName", type: "text", labelEn: "Event name", labelAr: "اسم الفعالية", required: true },
      {
        name: "eventType",
        type: "select",
        labelEn: "Event type",
        labelAr: "نوع الفعالية",
        required: true,
        options: [
          { value: "conference", labelEn: "Conference", labelAr: "مؤتمر" },
          { value: "concert", labelEn: "Concert", labelAr: "حفل موسيقي" },
          { value: "wedding", labelEn: "Wedding", labelAr: "زفاف" },
          { value: "other", labelEn: "Other", labelAr: "أخرى" },
        ],
      },
      { name: "expectedAttendance", type: "number", labelEn: "Expected attendance", labelAr: "العدد المتوقع للحضور", required: false },
      {
        name: "venueType",
        type: "select",
        labelEn: "Venue type",
        labelAr: "نوع المكان",
        required: false,
        options: [
          { value: "indoor", labelEn: "Indoor", labelAr: "داخلي" },
          { value: "outdoor", labelEn: "Outdoor", labelAr: "خارجي" },
          { value: "mixed", labelEn: "Mixed", labelAr: "مختلط" },
        ],
      },
      { name: "eventDate", type: "date", labelEn: "Event date", labelAr: "تاريخ الفعالية", required: false },
      { name: "durationDays", type: "number", labelEn: "Duration (days)", labelAr: "المدة (أيام)", required: false },
      { name: "numberOfEntryPoints", type: "number", labelEn: "Number of entry points", labelAr: "عدد نقاط الدخول", required: false },
    ],
  },
];

// O(1) lookup by category — used by the services view to resolve deep links.
export const servicesById: Record<string, Service> = Object.fromEntries(
  services.map((service) => [service.id, service]),
);
