export type CertStatus = "earned" | "in-progress" | "planned" | "expired";

export type CertItem = {
  title: string;
  subtitle?: string;
  image?: string;
  href?: string;
  issuedOn?: string;
  expiresOn?: string;
  credentialId?: string;
  targetDate?: string;
  status?: CertStatus;
  logo?: string;
};