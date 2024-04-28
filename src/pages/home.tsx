import React, { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { LogoIcon } from "../components/Icons";
import "../app/globals.css";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [userEmail, setUserEmail] = useState<string>('');

  useEffect(() => {
    const email = localStorage.getItem('userEmail') || '';
    setUserEmail(email);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userEmail');
    window.location.href = "/Login";
  };

  return (
    <>
      <div className="bg-cover bg-center min-h-screen" style={{backgroundImage: `url("../assets/background.png")`}}>
        <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
          <NavigationMenu className="mx-auto">
            <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
              <NavigationMenuItem className="font-bold flex">
                <a href="/" className="ml-2 font-bold text-xl flex">
                  <LogoIcon />
                  Medicine Recommendation System
                </a>
              </NavigationMenuItem>
              <div className="hidden md:flex gap-2">
                <Button onClick={handleLogout}>Logout</Button>
              </div>
            </NavigationMenuList>
          </NavigationMenu>
        </header>
      </div>
      <div className="fixed inset-0 flex justify-center items-center bg-transparent">
        <div className="bg-white shadow-lg rounded-full p-2">
          <input
            type="text"
            placeholder="Search for medicines..."
            className="w-96 h-16 px-4 py-2 border border-gray-300 rounded-full"
          />
          <Button className="ml-2 bg-green-500 text-white px-4 py-2 rounded-full">
            Search
          </Button>
        </div>
      </div>
    </>
  );
  
  
}
