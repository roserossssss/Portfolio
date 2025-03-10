"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [isFading, setIsFading] = useState(false);

  const handleClick = () => {
    setIsFading(true);
    setTimeout(() => {
      router.push("/portfolio");
    }, 500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white font-serif italic">
      <button
        onClick={handleClick}
        className={`text-8xl transition-all duration-500 ${
          isFading ? "opacity-0 translate-y-4" : "opacity-100"
        } hover:text-gray-400 focus:text-gray-700`}
      >
        Start
      </button>
    </div>
  );
}
