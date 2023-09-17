import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { MdModeNight, MdLightMode, MdMenu, MdClose } from "react-icons/md";

interface NavItems {
  name: string;
  link: string;
  icon?: React.ReactNode;
}

export default function Navbar() {
  const router = useRouter();
  const { dark, changeTheme } = useTheme();

  const navItems: NavItems[] = [
    { name: "Home", link: "/" },
    { name: "Resume", link: "/resume" },
    { name: "Skills", link: "/skills" },
    { name: "Projects", link: "/projects" },
  ];

  const iconSize = "w-6 h-6";

  return (
    <nav className="navbar">
      <div className="hidden lg:flex navbar-start flex-1 gap-6">
        {navItems.map((item) => {
          if (router.pathname == item.link) {
            if (router.pathname != "/") {
              return (
                <Link key={item.name} href={item.link}>
                  <div className="border-b font-extrabold border-black dark:border-white">
                    {item.name}
                  </div>
                </Link>
              );
            }
          }
          return (
            <Link key={item.name} href={item.link}>
              <div className="hover:border-b hover:font-extrabold border-black dark:border-white">
                {item.name}
              </div>
            </Link>
          );
        })}
      </div>
      <div className="flex lg:hidden navbar-start">
        <Link href="/" className="font-bold px-2">
          <button className="">BuildTheOne</button>
        </Link>
      </div>
      <div className="navbar-end">
        <button
          className="btn btn-ghost btn-circle"
          onClick={() => changeTheme()}
        >
          {dark ? (
            <MdModeNight className={iconSize} />
          ) : (
            <MdLightMode className={iconSize} />
          )}
        </button>
      </div>
      <div className="lg:hidden dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <MdMenu className="h-8 w-8" />
        </label>
        <div
          tabIndex={0}
          className="menu menu-lg dropdown-content bg-white dark:bg-base-100 rounded z-10"
        >
          {navItems.map((item) => {
            if (router.pathname == item.link) {
              if (router.pathname != "/") {
                return (
                  <Link key={item.name} href={item.link}>
                    <div className="p-2 w-full font-black">{item.name}</div>
                  </Link>
                );
              }
            }
            return (
              <Link href={item.link} key={item.name}>
                <div className="p-2 w-full hover:font-black">{item.name}</div>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
