import Main from "@/components/Main/Main";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

type ContactProps = {
  name: string;
  username: string;
  link: string;
  image: string;
};

const Index: NextPage = () => {
  const contactList: ContactProps[] = [
    {
      name: "Email",
      username: "Dimas.Ignatius.S@gmail.com",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=Dimas.Ignatius.S@gmail.com",
      image: "email1.png",
    },
    {
      name: "LinkedIn",
      username: "dimasignatius",
      link: "https://www.linkedin.com/in/dimas-ignatius/",
      image: "linkedin.png",
    },
    {
      name: "Github",
      username: "BuildTheIne",
      link: "https://github.com/BuildTheOne",
      image: "github.png",
    },
  ];

  return (
    <Main>
      <div className="flex flex-col pt-8 gap-16">
        <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-16">
          <div className="flex gap-8 justify-center items-center">
            <div className="rounded-lg overflow-auto relative w-40 h-40">
              <Image src={"/profile.jpg"} alt="profile" fill={true} />
            </div>
          </div>
          <p className="text-center lg:text-justify px-8 lg:px-0">
            I&#39;m a <span className="font-bold">passionate developer</span>{" "}
            who embraces constant learning and growth. I have a strong
            dedication to <span className="font-bold">minimalistic design</span>{" "}
            principles, aiming to craft elegant and streamlined solutions. I
            actively seek{" "}
            <span className="font-bold">challenging projects</span> that provide
            opportunities for advancement and enable me to make a lasting
            impact.
          </p>
        </div>
        <div className="flex justify-around items-center gap-8">
          {contactList.map((contact) => {
            return (
              <Link key={contact.name} href={contact.link} target="_blank">
                <div className="tooltip tooltip-bottom" data-tip={contact.name}>
                  <button>
                    <div className="rounded-lg overflow-auto relative w-8 h-8">
                      <Image
                        src={"/" + contact.image}
                        alt={contact.name}
                        fill={true}
                        className="invert dark:invert-0"
                      />
                    </div>
                  </button>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </Main>
  );
};

export default Index;
