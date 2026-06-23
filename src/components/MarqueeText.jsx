"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function MarqueeText() {
  return (
    <Marquee
      speed={50}
      direction="left"
      className="bg-primary text-black py-3"
    >
      <div className="flex items-center gap-4">
        <span>
          New Arrivals: Clean Code | Atomic Habits | The Alchemist |
          Sapiens | Special Discount on Memberships
        </span>

        <Image
          src="/book.png"
          alt="BookApp Logo"
          width={40}
          height={40}
        />
      </div>
    </Marquee>
  );
}