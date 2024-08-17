"use client"; // Ensure this component is client-side
import React from "react";
import { usePathname, useRouter } from "next/navigation"; // Correct import for Next.js 13+ path handling
import SearchInputWithIcons from "./SearchInputWithIcons";
import Navbar2 from "./Navbar2";
import MenuIcon from "./MenuIcon";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import CloseIcon from "./CloseIcon";
import { MenuButton } from "./Menubutton";
import Link from "next/link";
import Arrow from "./Arrow";
import { Button } from "@/components/ui/button";
import { IoMdClose } from "react-icons/io";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleSignInClick = () => {
    router.push("/sign-in");
  }; // Use usePathname to get the current path

  // Define the routes where Navbar2 should not be rendered
  const hideNavbarRoutes = ["/sign-in", "/sign-up"];

  // Conditionally render the section based on pathname
  if (hideNavbarRoutes.includes(pathname)) {
    return null; // Return null if the current pathname matches the hideNavbarRoutes
  }

  return (
    <section className="w-full flex md:h-[10vh] flex-col items-center justify-between p-3 md:px-10">
      <div className="w-full h-full flex">
        <div className="w-[79%] md:w-1/2 flex justify-between items-center">
          {/* <Image src="/assets/Logo.png" width={40} height={40} alt="logo" priority /> */}
          <h3 className="text-xl md:text-2xl">
            Quote
            <span className="hidden md:inline-block"> Rider</span>
          </h3>

          <div className=" w-[50vw] md:w-[20vw]">
            <SearchInputWithIcons />
          </div>
        </div>
        <div className="md:w-1/2 hidden md:flex justify-end items-center ">
          <Navbar2 />
        </div>
        <Sheet>
          <SheetTrigger className="w-[17%] md:hidden flex items-center justify-end">
            <MenuIcon />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle className="font-normal flex relative">
                <div className="absolute top-1">
                  <IoMdClose />
                </div>
                <span className="ml-5">Close</span>
              </SheetTitle>
              <SheetDescription>
                <nav className="flex flex-col gap-8">
                  <MenuButton>
                    <Link
                      href="/post"
                      className={`text-gray-900 dark:text-gray-300 text-xl capitalize`}
                    >
                      Posts
                    </Link>
                  </MenuButton>
                  <MenuButton>
                    <Link
                      href="/about"
                      className={`text-gray-900 dark:text-gray-300 text-xl capitalize`}
                    >
                      About
                    </Link>
                  </MenuButton>
                  <MenuButton>
                    <Link
                      href="/video"
                      className={`text-gray-900 dark:text-gray-300 text-xl capitalize`}
                    >
                      Videos
                    </Link>
                  </MenuButton>
                  <Button
                    onClick={handleSignInClick}
                    className="border-2 text-lg font-normal border-black hover:bg-white hover:text-black"
                  >
                    Sign In
                    <span className="text-lg transition-transform duration-300 ease-in-out group-hover:translate-x-2 ml-2">
                      <Arrow />
                    </span>
                  </Button>
                </nav>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </section>
  );
};

export default Navbar;
