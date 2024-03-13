"use client"

import { AiOutlineSearch } from 'react-icons/ai';
import { useRef } from 'react';

const InputSearch = () => {
  const searchRef = useRef<HTMLInputElement>(null);

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    const keyword = searchRef.current?.value;
    if (keyword) {
      window.location.href = `/search/${keyword}`;
    }
  };

  return (
    <div className="flex">
      <input
        placeholder="Search..."
        className="w-full p-1 rounded-full"
        ref={searchRef}
      />
      <button className="absolute right-5 p-2 bg-gray-200 rounded-full" onClick={handleSearch}>
        <AiOutlineSearch />
      </button>
    </div>
  );
};

export default InputSearch;
