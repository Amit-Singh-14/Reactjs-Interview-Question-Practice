import { useEffect, useState } from "react";
import { createContext } from "react";
import fetchFlagsDataServiceCall from "../data";

export const FeatureFlagsContext = createContext();

export default function FeatureFlagGlobalState({ children }) {
  const [loading, setLoading] = useState(false);
  const [enableFlags, setEnableFlags] = useState({});

  async function fetchFeatureFlags() {
    try {
      setLoading(true);
      const res = await fetchFlagsDataServiceCall();
      setEnableFlags(res);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      throw new Error(error);
    }
  }

  useEffect(() => {
    fetchFeatureFlags();
  }, []);

  return (
    <FeatureFlagsContext.Provider value={{ loading, enableFlags }}>
      {children}
    </FeatureFlagsContext.Provider>
  );
}
