"use client";

import { useState } from "react";
import MenuButton from "./MenuButton";
import NavMenuDesktop from "./NavMenuDesktop";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative flex justify-between items-center bg-blue-200 ">
      ble ble ble
      <NavMenuDesktop />
      <MenuButton menuState={isOpen} menuHandler={setIsOpen} />
    </nav>
  );
}
