"use client"
import React, { useState } from "react";
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { LogoIcon } from "../components/Icons";
import "../app/globals.css"

const UserIcon = ({ email }: { email: string }) => {
  const firstLetter = email.charAt(0).toUpperCase();
  return (
    <Link href="/profile"> {/* Replace "/profile" with the actual URL of your profile page */}
      <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full text-gray-600 font-bold">
        {firstLetter}
      </div>
    </Link>
  );
};

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const userEmail = "moudipa@123"; // Get the user's email from state or context
  return (
    <>
      <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
        <NavigationMenu className="mx-auto">
          <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
            <NavigationMenuItem className="font-bold flex">
              <a
                href="/"
                className="ml-2 font-bold text-xl flex"
              >
                <LogoIcon />
                Medicine Remomendation System
              </a>
            </NavigationMenuItem>
            <div className="hidden md:flex gap-2">
              <div className="relative">
                <UserIcon email={userEmail} />
              </div>
            </div>
          </NavigationMenuList>
        </NavigationMenu>
      </header>
    </>
  );
}
