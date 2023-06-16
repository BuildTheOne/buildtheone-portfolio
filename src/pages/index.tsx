import { useTheme } from '@/context/themeContext'
import Image from 'next/image'
import Link from 'next/link'

interface ContactItem {
  name: string,
  username: string,
  link: string,
}

export default function Home() {
  const { dark } = useTheme()

  const contactList: ContactItem[] = [
    {
      name: "Email",
      username: "Dimas.Ignatius.S@gmail.com",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=Dimas.Ignatius.S@gmail.com",
    },
    {
      name: "LinkedIn",
      username: "dimasignatius",
      link: "https://www.linkedin.com/in/dimas-ignatius/",
    },
    {
      name: "Github",
      username: "BuildTheIne",
      link: "https://github.com/BuildTheOne",
    },
  ]

  return (
    <div className='flex flex-col gap-8'>
      <div className="flex flex-col-reverse md:flex-row gap-8 justify-between">
        <p className="">
          I&#39;m a passionate developer who embraces constant learning and growth. I have a strong dedication to minimalistic design principles, aiming to craft elegant and streamlined solutions. I actively seek challenging projects that provide opportunities for advancement and enable me to make a lasting impact.
        </p>

        <div className="flex gap-8 justify-center items-center">
          <div className={`rounded-full w-32 h-32 border ${dark ? "border-white" : "border-black"}`}></div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 w-full justify-around items-center">
        {contactList.map((contact, i) => {
          return (
            <Link key={i} href={contact.link} target='_blank'>
              <div className={`flex gap-2 p-2 items-center rounded-lg border ${dark ? "border-white" : "border-black"}`}>
                <p className="hover:font-black">{contact.name}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
