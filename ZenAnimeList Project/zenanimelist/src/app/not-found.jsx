"use client"
import { FileSearchIcon } from "@phosphor-icons/react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
      <div className="flex justify-center items-center gap-2 flex-col">
        <FileSearchIcon size={45} className="text-color-accent"/>
        <h3 className="text-color-accent text-3xl font-bold">
          NOT FOUND ERROR VROHH !!
        </h3>
        <Link href={"/"} className="text-color-primary hover:text-color-accent transition-all underline">Kembali</Link>
      </div>
    </div>
  );
};

export default Page;
