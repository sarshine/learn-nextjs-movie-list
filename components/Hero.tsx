"use client"

import { Play, Megaphone, Star } from "@phosphor-icons/react";
import Link from "next/link";

const Hero = () => {
  return (
    <div style={{ backgroundColor: "#F4F4F4", padding: "18px", display: "flex", alignItems: "center" }}>
      <Link href="/movies/popular">
        <div className="flex items-center mr-6">
          <button className="mr-2" style={{ color: "#006563" }}>
            <Play size={20} />
          </button>
          <span className="cursor-pointer" style={{ color: "#006563" }}>Popular Movies</span>
        </div>
      </Link>
      <Link href="/movies/upcoming">
        <div className="flex items-center mr-6">
          <button className="mr-2" style={{ color: "#006563" }}>
            <Megaphone size={20} />
          </button>
          <span className="cursor-pointer" style={{ color: "#006563" }}>Upcoming</span>
        </div>
      </Link>
      <Link href="/movies/top-rated">
        <div className="flex items-center">
          <button className="mr-2" style={{ color: "#006563" }}>
            <Star size={20} />
          </button>
          <span className="cursor-pointer" style={{ color: "#006563" }}>Top Rated</span>
        </div>
      </Link>
    </div>
  );
};

export default Hero;
