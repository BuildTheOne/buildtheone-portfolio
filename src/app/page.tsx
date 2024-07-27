import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

function HomePage() {
  const contactList: {
    name: string;
    username: string;
    link: string;
    image: string;
  }[] = [
    {
      name: "Email",
      username: "dimas.ignatius.d@gmail.com",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=dimas.ignatius.s@gmail.com",
      image: "/email1.png",
    },
    {
      name: "LinkedIn",
      username: "dimasignatius",
      link: "https://www.linkedin.com/in/dimas-ignatius/",
      image: "/linkedin.png",
    },
    {
      name: "Github",
      username: "BuildTheIne",
      link: "https://github.com/BuildTheOne",
      image: "/github.png",
    },
  ];

  return (
    <>
      <div className="flex flex-col-reverse md:flex-row gap-12 md:gap-16 items-center pt-8 md:pt-12">
        <p className="">
          I am a <span className="font-bold">passionate developer</span> who
          embraces constant learning and growth. I have a strong dedication to{" "}
          <span className="font-bold"> minimalistic design</span> principles,
          aiming to craft elegant and streamlined solutions. I actively seek{" "}
          <span className="font-bold">challenging projects</span> that provide
          opportunities for advancement and enable me to make a lasting impact.
        </p>
        <Avatar className="w-40 h-40 rounded-lg">
          <AvatarImage src="/profile.jpg" />
        </Avatar>
      </div>
      <div className="grid grid-cols-3 pt-8 md:pt-12">
        {contactList.map((contact) => (
          <Link key={contact.name} href={contact.link} target="_blank">
            <div className="flex justify-center items-center">
              <Avatar className="rounded-none invert dark:invert-0">
                <AvatarImage src={contact.image} />
              </Avatar>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default HomePage;
