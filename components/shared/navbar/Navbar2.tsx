"use client";

import Link from "next/link";
import { MenuButton } from "./Menubutton";
import { Button } from "@/components/ui/button";
import Arrow from "./Arrow";
import { useRouter } from "next/navigation";

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
  );
};

export default Navbar2;
