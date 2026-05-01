import { useState } from "react";

export default function IconCta() {
  const [active, setActive] = useState(false);

  return (
    <div
      className="group relative w-full h-full flex items-center justify-center"
      onTouchStart={() => setActive(true)}
      onTouchEnd={() => setActive(false)}
    >
      <img
        className={`absolute z-10 w-full h-full transition-transform
          group-hover:animate-[spin_2s_linear_infinite]
          ${active ? "animate-[spin_2s_linear_infinite]" : ""}
        `}
        src="/assets/icons/Music_shape.svg"
        alt="discover icon background"
      />
      <div className="absolute z-20 w-1/3 h-1/3 flex items-center justify-center">
        <img
          className="w-full h-full"
          src="/assets/icons/Long-arrow.svg"
          alt="discover icon"
        />
      </div>
    </div>
  );
}
