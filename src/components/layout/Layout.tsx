import { useTheme } from "../../context/ThemeContext";
import Head from "next/head";
import { Inconsolata } from "next/font/google";
import Navbar from "../Navbar/Navbar";

const inconsolata = Inconsolata({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  const { dark } = useTheme();

  return (
    <>
      <Head>
        <title>BuildTheOne</title>
        <link rel="icon" href="/favicon.ico"></link>
        <meta name="keywords" content="web developer,mobile developer" />
        <meta
          name="description"
          content="A passionate developer, a minimalistic designer, and a challenger."
        />
      </Head>

      <main className={inconsolata.className + " " + `${dark ? "dark" : ""}`}>
        <div className="main bg-slate-200 text-black dark:bg-black dark:text-white flex flex-col lg:items-center w-full h-screen justify-between overflow-auto text-lg pb-8 lg:py-8">
          <div className="flex flex-col lg:w-1/2 lg:gap-2">
            <Navbar />
            {children}
          </div>
        </div>
      </main>
    </>
  );
}
