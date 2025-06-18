"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [showLoadingBar, setShowLoadingBar] = useState(false);

  const handleClick = () => {
    setShowLoadingBar(true); // Show loading bar when clicked

    setTimeout(() => {
      router.push("/portfolio");
    }, 500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white font-serif">
      {/* PC Container */}
      <div className="flex flex-col items-center gap-4">
        {/* Monitor */}
        <div className="bg-black border-4 border-white rounded-lg w-[500px] h-[300px] flex flex-col items-center justify-center shadow-2xl relative px-6">
          {/* Start Button */}
          <button
            onClick={handleClick}
            className="text-5xl italic hover:text-white focus:text-white transition-all duration-300"
          >
            Start
          </button>

          {/* Loading Bar */}
          {showLoadingBar && (
            <div className="mt-6 w-[200px]">
              <div className="w-full h-2 bg-black rounded overflow-hidden">
                <div className="h-full bg-white animate-loading-bar"></div>
              </div>
            </div>
          )}
        </div>

        {/* Stand */}
        <div className="w-[150px] h-4 bg-white rounded-b-md"></div>

        {/* Base */}
        <div className="w-[300px] h-4 bg-white rounded"></div>
      </div>

      {/* Tailwind custom animation */}
      <style jsx>{`
        @keyframes loadingBar {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }

        .animate-loading-bar {
          animation: loadingBar 1.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
