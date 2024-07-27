"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "./theme-switcher";

const Navbar = () => {
  const pathName = usePathname();
  const navItems: {
    name: string;
    link: string;
  }[] = [
    { name: "About Me", link: "/" },
    { name: "Resume", link: "/resume" },
    { name: "Skills", link: "/skills" },
    { name: "Works", link: "/works" },
  ];

  return (
    <nav className="flex justify-between items-center px-4 md:px-0">
      <div className="w-full flex items-center gap-4 md:gap-8 flex-wrap">
        {navItems.map((item) => (
          <Link href={item.link} key={item.name}>
            <p
              className={`${pathName === item.link ? "underline underline-offset-8 font-extrabold" : ""} hover:underline hover:underline-offset-8 hover:font-extrabold`}
            >
              {item.name}
            </p>
          </Link>
        ))}
      </div>
      <ThemeSwitcher />
    </nav>
  );
};

export default Navbar;
