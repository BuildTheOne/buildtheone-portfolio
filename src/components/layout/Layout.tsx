import { useTheme } from "@/context/themeContext"
import Navbar from "../navbar/Navbar"
import Head from "next/head"
import { Inconsolata } from 'next/font/google'

const inconsolata = Inconsolata({ subsets: ['latin'] })

export default function Layout({ children }: {
  children: React.ReactNode
}) {
  const { dark } = useTheme()

  return (
    <>
      <Head>
        <title>BuildTheOne</title>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>

      <main className={inconsolata.className + " " + `${dark ? "bg-black text-white" : "bg-slate-200"} flex flex-col md:items-center w-full h-screen justify-between overflow-auto text-lg`}>
        <div className="flex flex-col md:w-1/2 md:py-8 gap-4">
          <Navbar />
          <div className={`grow md:border md:rounded-lg ${dark ? "border-white" : "border-black"} p-6`}>
            {children}
          </div>
        </div>
      </main>
    </>
  )
}
