"use client";

import { useEffect } from "react";
import { CgSpinner } from "react-icons/cg";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="text-center mt-10">
      <h1>Something went wrong</h1>
      <button
        className="px-3 py-2.5 hover:text-amber-600"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
