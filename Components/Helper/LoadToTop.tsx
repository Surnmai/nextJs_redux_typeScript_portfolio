"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoadToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [useRouter]);

  return null;
}
