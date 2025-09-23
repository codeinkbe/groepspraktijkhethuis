"use client";

import { useCallback } from "react";
import { usePlausible } from "next-plausible";

type EventProps = Record<string, string | number | boolean>;

export const useTrackEvent = () => {
  const plausible = usePlausible();
  return useCallback((event: string, props?: EventProps) => {
    plausible(event, props ? { props } : undefined);
  }, [plausible]);
};
