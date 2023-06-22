import { useTheme } from "@/context/themeContext"
import Link from "next/link"
import { MdFileDownload } from "react-icons/md"

export default function CV() {
  const { dark } = useTheme()

  return (
    <div className='flex flex-col gap-4 items-center'>
      <h1 className="block font-bold text-2xl md:hidden p-2 text-center">CV</h1>
      <Link href="/CV_IgnatiusHenriyantoPrimaiRenda.pdf" target="_blank">
        <button className={`flex items-center p-2 gap-2 rounded-lg border ${dark ? "border-white" : "border-black"}`}>
          <p className="">Download</p>
          <MdFileDownload className="h-6 w-6" />
        </button>
      </Link>
    </div>
  )
}
