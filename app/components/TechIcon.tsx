"use client";

import { useState } from "react";

interface TechIconProps {
  icon: string;
  name: string;
}

export default function TechIcon({ icon, name }: TechIconProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="h-16 w-16 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center p-3 group-hover:shadow-md group-hover:border-blue-300 transition-all duration-200 relative overflow-hidden">
      {!hasError ? (
        <img
          src={icon}
          alt={name}
          width={48}
          height={48}
          className="w-full h-full object-contain"
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="fallback-icon absolute inset-0 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
        </div>
      )}
    </div>
  );
}

