"use client";

import { FiLinkedin, FiGithub } from "react-icons/fi";
import { LuUtensilsCrossed } from "react-icons/lu";
import Link from "next/link";
import { FaHamburger } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full flex justify-between max-w-[1100px] fixed top-0 mx-auto p-4 items-center h-10">
      <div>Logo</div>
      <nav>
        <button className="flex sm:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <LuUtensilsCrossed /> : <FaHamburger />}
        </button>

        {/* Mobile Menu  */}
        {isOpen && (
          <ul className="flex flex-col border border-white absolute top-10 right-4 sm:hidden">
            <li className="border border-white">
              <Link href="#" className="flex py-2 px-4 items-center gap-2">
                <FiLinkedin />
                <span>LinkedIn</span>
              </Link>
            </li>
            <li className="border border-white">
              <Link href="#" className="flex py-2 px-4 items-center gap-2">
                <FiGithub />
                <span>GitHub</span>
              </Link>
            </li>
          </ul>
        )}

        {/* Desktop Menu */}
        <ul className="gap-2 flex-row sm:flex hidden">
          <li>
            <Link href="#">
              <FiLinkedin />
            </Link>
          </li>
          <li>
            <Link href="#">
              <FiGithub />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
