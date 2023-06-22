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
    <div className='flex flex-col gap-8 pt-8'>
      <div className="flex flex-col-reverse md:flex-row gap-8 justify-between">
        {/* Desc */}
        <p className="">
          I&#39;m a <span className='font-bold'>passionate developer</span> who embraces constant learning and growth. I have a strong dedication to <span className="font-bold">minimalistic design</span> principles, aiming to craft elegant and streamlined solutions. I actively seek <span className="font-bold">challenging projects</span> that provide opportunities for advancement and enable me to make a lasting impact.
        </p>

        {/* Photo */}
        <div className="flex gap-8 justify-center items-center">
          <div className={`rounded-lg overflow-auto relative w-32 h-32`}>
            <Image src={'/profile.jpeg'} alt='profile' fill={true} />
          </div>

        </div>
      </div>

      {/* Contact */}
      <div className="flex flex-col md:flex-row gap-4 w-full justify-around items-center">
        {contactList.map((contact, i) => {
          return (
            <Link key={i} href={contact.link} target='_blank' className='w-full md:w-auto'>
              <div className={`flex gap-2 p-2 items-center justify-center rounded-lg border ${dark ? "border-white" : "border-black"}`}>
                <p className="hover:underline">{contact.name}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
