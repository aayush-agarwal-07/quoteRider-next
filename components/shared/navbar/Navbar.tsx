"use client"; // Ensure this component is client-side

import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import SearchInputWithIcons from "./SearchInputWithIcons";
import Navbar2 from "./Navbar2";
import MenuIcon from "./MenuIcon";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ModeToggle } from "@/components/ui/darkmodebtn";

const Navbar: React.FC = () => {
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleMenuItemClick = () => {
    setIsSheetOpen(false);
  };

  const menuItems = [
    { label: "About", href: "/about", onClick: handleMenuItemClick },
    { label: "Post", href: "/post", onClick: handleMenuItemClick },
    { label: "Video", href: "/video", onClick: handleMenuItemClick },
  ];

  const handleSignInClick = () => {
    router.push("/sign-in");
    setIsSheetOpen(false);
  };

  const hideNavbarRoutes: string[] = ["/sign-in", "/sign-up"];

  if (hideNavbarRoutes.includes(pathname)) {
    return null;
  }

  return (
    <section className="w-full flex md:h-[10vh] flex-col items-center justify-between p-3 md:px-10">
      <div className="w-full h-full flex">
        <div className="w-[75%] md:w-1/2 flex justify-between items-center">
          <Link href="/" className="text-xl font-medium md:text-2xl">
            Quote
            <span className="hidden md:inline-block"> Rider</span>
            <span className="text-blue-600 w-3">.</span>
          </Link>

          <div className="w-[50vw] md:w-[25vw]">
            <SearchInputWithIcons />
          </div>
        </div>
        <div className="md:w-1/2 hidden md:flex justify-end items-center">
          <Navbar2 />
        </div>
        <div className="ml-3 w-[10%] md:hidden scale-[0.8]">
          <ModeToggle />
        </div>
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger
            className="w-[10%] md:hidden flex items-center justify-end"
            onClick={() => setIsSheetOpen(true)}
          >
            <MenuIcon />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetDescription>
                <div className="flex flex-col items-center justify-center gap-8 mt-10">
                  {menuItems.map((item, index) => (
                    <Link
                      href={item.href}
                      key={index}
                      onClick={item.onClick}
                      className="text-gray-900 dark:text-gray-300 text-xl capitalize"
                    >
                      {item.label}
                    </Link>
                  ))}{" "}
                  <button className="flex justify-center items-center gap-3 signinboxshadowbtn group md:w-[8vw] h-[4vh] relative -top-1 pointer" onClick={handleSignInClick}>
        Sign In
        <span className="text-lg transition-transform duration-300 ease-in-out group-hover:translate-x-2 text-blue-500">
          <ArrowRight />
        </span>
      </button>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </section>
  );
};

export default Navbar;
