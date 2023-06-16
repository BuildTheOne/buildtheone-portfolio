import { useTheme } from "@/context/themeContext"
import Link from "next/link"

interface ProjectItem {
  name: string,
  desc: string,
  link: string,
  techs?: string[],
}

export default function Project() {
  const { dark } = useTheme()

  const projectList: ProjectItem[] = [
    {
      name: "BuildTheOne Portfolio",
      desc: "BuildTheOne Personal Portfolio",
      link: "https://buildtheone.vercel.app/",
      techs: ['Next.js'],
    },
    {
      name: "Password Generator",
      desc: "React web to generate random password",
      link: "https://buildtheone.github.io/password-generator/",
      techs: ['React.js'],
    },
    {
      name: "Randomizer App",
      desc: "Flutter app to create and randomize from list",
      link: "https://github.com/BuildTheOne/randomizer_app",
      techs: ['Flutter'],
    },
  ]

  const listTechColor = new Map<String, String>([
    ['html', "bg-[#f06529] text-black border-[#f06529]"],
    ['css', "bg-[#2965f1] text-white border-[#2965f1]"],
    ['javascript', "bg-[#F0DB4F] text-black border-[#F0DB4F]"],
    ['reactjs', "bg-[#61DBFB] text-black border-[#61DBFB]"],
    ['flutter', "bg-[#027DFD] text-white border-[#027DFD]"],
    ['django', "bg-[#092e20] text-white border-[#092e20]"],
    ['nodejs', "bg-[#339933] text-black border-[#339933]"],
    ['nextjs', "bg-[#000000] text-white border-white"],
    ['java', "bg-[#ED8B00] text-black border-[#ED8B00]"],
    ['python', "bg-[#4B8BBE] text-black border-[#4B8BBE]"],
    ['androidnative', "bg-[#3DDC84] text-black border-[#3DDC84]"],
    ['spring', "bg-[#6DB33F] text-black border-[#6DB33F]"],
    ['vuejs', "bg-[#42b883] text-black border-[#42b883]"],
    ['angular', "bg-[#a6120d] text-white border-[#a6120d]"],
    ['svelte', "bg-[#FF3E00] text-white border-[#FF3E00]"],
    ['php', "bg-[#777BB3] text-white border-[#777BB3]"],
    ['laravel', "bg-[#FF2D20] text-white border-[#FF2D20]"],
    ['mysql', "bg-[#00758F] text-white border-[#00758F]"],
    ['postgresql', "bg-[#008bb9] text-white border-[#008bb9]"],
    ['mongodb', "bg-[#00ED64] text-black border-[#00ED64]"],
  ])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {projectList.map((project, i) => {
        return (
          <Link key={i} href={project.link} target="_blank">
            <div className={`p-4 border rounded-lg flex flex-col gap-2 ${dark ? "border-white" : "border-black"}`}>
              <p className="font-bold text-lg">{project.name}</p>
              <p className="">{project.desc}</p>

              <div className="flex gap-2 flex-wrap">
                {project.techs?.map((tech, j) => {
                  const techColor = listTechColor.get(tech.toLowerCase().replace(".", "").replace(" ", ""))
                  return (
                    <div key={j} className={`px-1 py-0.5 border rounded-md ${techColor}`}>
                      {tech}
                    </div>
                  )
                })}
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
