'use client'
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Home">
            Test
          </MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Our Courses">
          <div className="flex flex-col space-y-4 text-sm ">
            <HoveredLink href="/course">All Courses</HoveredLink>
            <HoveredLink href="/course">Basic Music Theory</HoveredLink>
            <HoveredLink href="/course">Advanced Composition</HoveredLink>
            <HoveredLink href="/course">Song Writing</HoveredLink>
            <HoveredLink href="/course">Music Composition</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Contact Us" >
            <HoveredLink href="/contact">Contact us </HoveredLink>
          </MenuItem>
        </Link>
      </Menu>
    </div>
  )
}

export default navbar