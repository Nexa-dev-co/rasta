// PROTOTYPE: placeholder contact channels — swap for the real accounts before launch.
export const socialLinks = {
  whatsApp: "https://wa.me/201000000000",
  facebook: "https://facebook.com/",
  phone: "+201000000000",
  email: "info@rasta-security.com",
} as const;

export type SocialChannel = keyof typeof socialLinks;
