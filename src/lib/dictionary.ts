export type Language = "ar" | "en";

// All user-visible chrome strings live here in both languages. Service and
// form copy lives alongside the data in data/services.ts.
export const dictionary = {
  en: {
    brand: {
      name: "RASTA",
      tagline: "Security Services & Close Protection",
      motto: "We don't just protect, we stand as a standard.",
    },
    nav: {
      home: "Home",
      services: "Services",
      contact: "Contact",
      requestService: "Request a Service",
      languageToggle: "العربية",
    },
    hero: {
      eyebrow: "Trusted Security Partner",
      headline: "Protection that stands as a standard.",
      subheadline:
        "Physical security, close protection, and smart systems for compounds, malls, factories, and the people who run them.",
      primaryCta: "Get a Consultation",
      secondaryCta: "Explore Services",
      scroll: "Scroll",
    },
    stats: {
      yearsExperience: "Years of experience",
      clientsServed: "Clients served",
      guardsDeployed: "Guards deployed",
      uptime: "Coverage, around the clock",
    },
    servicesSnapshot: {
      heading: "What we secure",
      subheading: "Eleven specialized services across physical and digital security.",
      viewAll: "View all services",
    },
    whyUs: {
      heading: "Why RASTA",
      professional: "Professional",
      professionalDesc: "Vetted, trained personnel who represent your brand with discipline.",
      strongPresence: "Strong Presence",
      strongPresenceDesc: "A visible, confident deterrent that sets the standard on site.",
      integrity: "Integrity",
      integrityDesc: "Transparent operations and accountability you can audit.",
      protection: "Protection",
      protectionDesc: "Layered coverage built around your specific risk profile.",
    },
    ctaBanner: {
      heading: "Ready to raise your security standard?",
      subheading: "Tell us about your site and we'll build a plan around it.",
      button: "Talk to us",
    },
    servicesPage: {
      heading: "Our Services",
      subheading: "Select a service to send us your preliminary requirements.",
      requestService: "Request Service",
      closeForm: "Close",
      featured: "Premium",
    },
    serviceForm: {
      submit: "Submit Request",
      submittedTitle: "Request received",
      submittedBody: "This is a prototype — your request was logged to the console, not sent.",
      selectPlaceholder: "Select…",
      requiredHint: "Required",
    },
    contactPage: {
      heading: "Contact Us",
      subheading: "Qualified leads get a response within one business day.",
      fullName: "Full Name",
      email: "Email Address",
      phoneNumber: "Phone Number",
      notes: "Notes / Message",
      submit: "Send Message",
      submittedTitle: "Thanks — message received",
      submittedBody: "This is a prototype, so nothing was actually sent.",
      infoHeading: "Reach us directly",
      phoneLabel: "Phone",
      emailLabel: "Email",
      hoursLabel: "Working hours",
      hoursValue: "Sun–Thu, 9:00 – 18:00",
      whatsAppLabel: "WhatsApp",
    },
    fab: {
      open: "Open contact menu",
      close: "Close contact menu",
      whatsApp: "WhatsApp",
      facebook: "Facebook",
      phone: "Call us",
    },
    footer: {
      quickLinks: "Quick Links",
      followUs: "Follow Us",
      rights: "All rights reserved.",
    },
    validation: {
      tooShort: "This field is too short.",
      invalidEmail: "Enter a valid email address.",
      invalidPhone: "Enter a valid phone number.",
      required: "This field is required.",
    },
  },
  ar: {
    brand: {
      name: "راستا",
      tagline: "خدمات الأمن والحماية الشخصية",
      motto: "نحن لا نحمي فقط، بل نضع المعيار.",
    },
    nav: {
      home: "الرئيسية",
      services: "الخدمات",
      contact: "تواصل معنا",
      requestService: "اطلب خدمة",
      languageToggle: "English",
    },
    hero: {
      eyebrow: "شريكك الموثوق في الأمن",
      headline: "حماية تضع المعيار.",
      subheadline:
        "أمن مادي وحماية شخصية وأنظمة ذكية للكمبوندات والمولات والمصانع ومن يديرونها.",
      primaryCta: "احصل على استشارة",
      secondaryCta: "استكشف الخدمات",
      scroll: "مرّر للأسفل",
    },
    stats: {
      yearsExperience: "سنوات الخبرة",
      clientsServed: "عملاء خدمناهم",
      guardsDeployed: "أفراد أمن منتشرون",
      uptime: "تغطية على مدار الساعة",
    },
    servicesSnapshot: {
      heading: "ما الذي نؤمّنه",
      subheading: "إحدى عشرة خدمة متخصصة في الأمن المادي والرقمي.",
      viewAll: "عرض كل الخدمات",
    },
    whyUs: {
      heading: "لماذا راستا",
      professional: "احترافية",
      professionalDesc: "أفراد مدرّبون ومدقّقون يمثلون علامتك بانضباط.",
      strongPresence: "حضور قوي",
      strongPresenceDesc: "ردع واضح وواثق يضع المعيار في الموقع.",
      integrity: "نزاهة",
      integrityDesc: "عمليات شفافة ومساءلة يمكنك مراجعتها.",
      protection: "حماية",
      protectionDesc: "تغطية متعددة الطبقات مبنية على ملف مخاطرك.",
    },
    ctaBanner: {
      heading: "جاهز لرفع معيار أمنك؟",
      subheading: "أخبرنا عن موقعك وسنضع خطة مخصصة له.",
      button: "تحدث إلينا",
    },
    servicesPage: {
      heading: "خدماتنا",
      subheading: "اختر خدمة لإرسال متطلباتك المبدئية.",
      requestService: "اطلب الخدمة",
      closeForm: "إغلاق",
      featured: "مميزة",
    },
    serviceForm: {
      submit: "إرسال الطلب",
      submittedTitle: "تم استلام الطلب",
      submittedBody: "هذا نموذج أولي — تم تسجيل طلبك في الكونسول ولم يُرسل.",
      selectPlaceholder: "اختر…",
      requiredHint: "مطلوب",
    },
    contactPage: {
      heading: "تواصل معنا",
      subheading: "نرد على العملاء المؤهلين خلال يوم عمل واحد.",
      fullName: "الاسم الكامل",
      email: "البريد الإلكتروني",
      phoneNumber: "رقم الهاتف",
      notes: "ملاحظات / رسالة",
      submit: "إرسال الرسالة",
      submittedTitle: "شكرًا — تم استلام رسالتك",
      submittedBody: "هذا نموذج أولي، لذلك لم يُرسل شيء فعليًا.",
      infoHeading: "تواصل معنا مباشرة",
      phoneLabel: "الهاتف",
      emailLabel: "البريد الإلكتروني",
      hoursLabel: "ساعات العمل",
      hoursValue: "الأحد–الخميس، 9:00 – 18:00",
      whatsAppLabel: "واتساب",
    },
    fab: {
      open: "افتح قائمة التواصل",
      close: "أغلق قائمة التواصل",
      whatsApp: "واتساب",
      facebook: "فيسبوك",
      phone: "اتصل بنا",
    },
    footer: {
      quickLinks: "روابط سريعة",
      followUs: "تابعنا",
      rights: "جميع الحقوق محفوظة.",
    },
    validation: {
      tooShort: "هذا الحقل قصير جدًا.",
      invalidEmail: "أدخل بريدًا إلكترونيًا صحيحًا.",
      invalidPhone: "أدخل رقم هاتف صحيحًا.",
      required: "هذا الحقل مطلوب.",
    },
  },
} as const;

// Widen the literal string values (from `as const`) to plain `string` so the
// English and Arabic trees share one structural type. Keys stay intact, so
// translations.nav.home and friends remain fully typed.
type WidenStrings<T> = T extends string
  ? string
  : { [Key in keyof T]: WidenStrings<T[Key]> };

// The English tree is the canonical shape every language must satisfy.
export type Dictionary = WidenStrings<(typeof dictionary)["en"]>;
