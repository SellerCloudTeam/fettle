import { checkUrlWithTimeout } from "./checkUrlWithTimeout";

export const checkVpnStatus = async (url: string, timeout: number) => {
  try {
    await checkUrlWithTimeout("OPTIONS", url, timeout);
  } catch {
    throw new Error("VPN Required");
  }
};
