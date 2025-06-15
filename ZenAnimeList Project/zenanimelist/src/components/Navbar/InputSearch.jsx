"use client";

import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    event.preventDefault();
    const keyword = searchRef.current.value;

    // validasi apakah keyword kosong/tidak berisi
    if(!keyword.trim()) {
      alert("Mohon masukkan kata kunci sebelum mencari!")
      return
    }
    router.push(`/search/${keyword}`);
  };

  return (
    <div className="relative">
      <input
        placeholder="Cari Anime..."
        className="w-full p-2 rounded bg-color-primary"
        ref={searchRef}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleSearch(event);
          }
        }}
      />
      <button
        className="absolute top-2 end-2 cursor-pointer"
        onClick={handleSearch}
      >
        <MagnifyingGlassIcon size={24} />
      </button>
    </div>
  );
};

export default InputSearch;
