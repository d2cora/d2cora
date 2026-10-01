"use client";

import { useEffect } from "react";

export function LocaleSync({ lang, dir }: { lang: string; dir: "ltr" | "rtl" }) {
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    return () => {
      // Revert to English default on unmount
      document.documentElement.lang = "en";
      document.documentElement.dir = "ltr";
    };
  }, [lang, dir]);

  return null;
}
