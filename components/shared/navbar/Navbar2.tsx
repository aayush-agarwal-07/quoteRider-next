"use client";

import Link from "next/link";
import { MenuButton } from "./Menubutton";
import { useRouter } from "next/navigation";
import { ModeToggle } from "@/components/ui/darkmodebtn";
import { ArrowRight } from "lucide-react";

const Navbar2: React.FC = () => {
  const router = useRouter();

  const handleSignInClick = () => {
    router.push("/sign-in");
  };
  return (
    <nav className="flex gap-8">
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
      <ModeToggle />
      <button className="flex justify-center items-center gap-3 signinboxshadowbtn group w-[8vw] h-[4vh] relative -top-1 pointer" onClick={handleSignInClick}>
        Sign In
        <span className="text-lg transition-transform duration-300 ease-in-out group-hover:translate-x-2 text-blue-500">
          <ArrowRight />
        </span>
      </button>
    </nav>
  );
};

export default Navbar2;
