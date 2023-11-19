import { useEffect, useState } from "react";
import { checkVpnStatus } from "../../utils/checkVpnStatus";
import { VPN_CHECK_MILLISECONDS } from "../../utils/constants";

const useVpnCheck = (url: string, timeout: number = VPN_CHECK_MILLISECONDS) => {
  const [vpn, setVpn] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    checkVpnStatus(url, timeout)
      .then(() => setVpn(true))
      .catch((e) => setError(e));
  }, [url, timeout]);

  return { vpn, error };
};

export default useVpnCheck;
