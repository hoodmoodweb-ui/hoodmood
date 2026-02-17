"use client";

import { useState } from "react";
import MenuButton from "./MenuButton";
import NavMenu from "./NavMenu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" flex justify-between">
      ble ble ble
      <NavMenu />
      <MenuButton menuState={isOpen} menuHandler={setIsOpen} />
    </nav>
  );
}
