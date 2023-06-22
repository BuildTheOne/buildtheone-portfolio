import { useTheme } from "@/context/themeContext";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { MdModeNight, MdLightMode, MdMenu, MdClose } from "react-icons/md";

interface NavItems {
  name: string,
  link: string,
  icon?: React.ReactNode,
}

export default function Navbar() {
  const router = useRouter()
  const { dark, changeTheme } = useTheme()

  const navItems: NavItems[] = [
    { name: "Home", link: "/", },
    { name: "CV", link: "/cv", },
    { name: "Skills", link: "/skills", },
    { name: "Project", link: "/project", },
  ]

  const iconSize = "w-6 h-6"
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Desktop view */}
      <nav className='hidden md:flex gap-2 justify-between items-center w-full'>
        {/* NavItems */}
        <div className="flex gap-6 ">
          {navItems.map((item, i) => {
            if (router.pathname == item.link) {
              if (router.pathname != "/") {
                return (
                  <Link key={i} href={item.link} className={`border-b font-extrabold ${dark ? "border-white" : "border-black"}`}>
                    {item.name}
                  </Link>
                )
              }
            }
            return (
              <Link key={i} href={item.link} className={`hover:border-b hover:font-extrabold ${dark ? "border-white" : "border-black"}`}>
                {item.name}
              </Link>
            )
          })}
        </div>

        {/* Dark Btn */}
        <button type="button" onClick={() => changeTheme()} className={`p-2 border rounded-lg ${dark ? "border-white" : "border-black"}`}>
          {dark ?
            <MdModeNight className={iconSize} />
            :
            <MdLightMode className={iconSize} />
          }
        </button>
      </nav>

      {/* Mobile view */}
      <nav className="flex flex-col md:hidden justify-between items-center w-full ">
        <div className="flex gap-2 justify-between items-center w-full py-2 px-4 z-20">
          <Link href="/" className="font-black">BuildTheOne</Link>
          <div className="flex gap-4">
            <button type="button" onClick={() => changeTheme()} className="">
              {dark ?
                <MdModeNight className={iconSize} />
                :
                <MdLightMode className={iconSize} />
              }
            </button>
            <button type="button" onClick={() => setOpen(!open)} className="">
              {
                open
                  ?
                  <MdClose className="h-8 w-8" />
                  :
                  <MdMenu className="h-8 w-8" />
              }
            </button>
          </div>
        </div>

        <div className="w-full relative z-10">
          <div className={`${open ? "" : "-translate-y-96"} flex absolute transition w-full`}>
            <div className={`flex flex-col w-full border-b rounded-b-lg ${dark ? "bg-black border-white" : "bg-slate-200 border-black"}`}>
              {navItems.map((item, i) => {
                if (router.pathname == item.link) {
                  if (router.pathname != "/") {
                    return (
                      <Link key={i} href={item.link} onClick={() => setOpen(false)}>
                    <div className={`p-2 w-full text-center font-black`}>
                      {item.name}
                    </div>
                  </Link>
                    )
                  }
                }
                return (
                  <Link key={i} href={item.link} onClick={() => setOpen(false)}>
                    <div className={`p-2 w-full text-center hover:font-black`}>
                      {item.name}
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
