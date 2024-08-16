import { useState, useEffect } from "react";

export function useHash() {
  // Not adding global.window && will cause error during build
  const [hash, setHash] = useState(global.window && window.location.hash);

  useEffect(() => {
    const onHashChange = () => {
      setHash(window.location.hash);
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);
  return hash;
}
