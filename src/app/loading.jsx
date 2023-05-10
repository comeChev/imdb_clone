"use client";

import { CgSpinner } from "react-icons/cg";

export default function loading() {
  return (
    <div className="flex justify-center">
      <CgSpinner className="animate-spin text-8xl" />
    </div>
  );
}
