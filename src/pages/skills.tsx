import { useTheme } from "@/context/themeContext"

interface SkillItem {
  name: string,
  subSkill?: SkillItem[],
  icon?: React.ReactNode,
}

export default function Skills() {
  const { dark } = useTheme()

  const skillSet: SkillItem[] = [
    {
      name: "Programming Language",
      subSkill: [
        { name: "Python" }, { name: "Java" },
      ]
    },
    {
      name: "Web Development",
      subSkill: [
        { name: "HTML" }, { name: "CSS" }, { name: "Javascript" }, { name: "Node.JS" }, { name: "React.JS" }, { name: "Next.JS" }, { name: "Django" }, { name: "Spring" },
      ]
    },
    {
      name: "Mobile Development",
      subSkill: [
        { name: "Flutter" }, { name: "Android Native" },
      ]
    },
    {
      name: "Database",
      subSkill: [
        { name: "MySQL" }, { name: "PostgreSQL" }, { name: "MongoDB" },
      ]
    }
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
    <div className='flex flex-col gap-6 flex-wrap'>
      {skillSet.map((skill, i) => {
        return (
          <div key={i} className="flex flex-col gap-4 flex-wrap">
            <p className={`border-b ${dark ? "border-white" : "border-black"} w-fit font-semibold`}>{skill.name}</p>
            <div className="flex gap-2 flex-wrap">
              {skill.subSkill?.map((sub, j) => {
                const techColor = listTechColor.get(sub.name.toLowerCase().replace(".", "").replace(" ", "")) ?? (dark ? "bg-black border-white" : "bg-slate-200 border-black")
                return (
                  <div key={j} className={`px-1 py-0.5 border rounded-md ${techColor}`}>
                    {sub.name}
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
