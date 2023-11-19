export const DAYS_BACK = 90;

export const VPN_CHECK_MILLISECONDS = 3000;

export const GITHUB_ORG_REPO = "SellerCloudTeam/fettle";

export const URL_VPN_CHECK =
  "https://health.sellercloud.com/health-api/ui-settings"; // Small JSON file for VPN smoke check

export const URL_HEALTHCHECKS_UI_API =
  "https://health.sellercloud.com/health-api"; // Health Checks UI API

export const Status = {
  OPERATIONAL: "Operational",
  PARTIAL_OUTAGE: "Partial outage",
  OUTAGE: "Outage",
  UNKNOWN: "Unknown",
} as const;

export type Statuses = (typeof Status)[keyof typeof Status];
