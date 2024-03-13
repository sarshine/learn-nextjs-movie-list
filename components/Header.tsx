import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import InputSearch from "./InputSearch";

const Header = () => {

  return (
    <header className="py-4 px-5 flex justify-between items-center" style={{ backgroundColor: "#006563" }}>
      <Link href="/" passHref>
        <div className="flex items-center cursor-pointer">
          <Image src="/cinema.png" alt="Cinema Logo" width={200} height={100} />
        </div>
      </Link>
      <InputSearch />
    </header>
  );
};

export default Header;
