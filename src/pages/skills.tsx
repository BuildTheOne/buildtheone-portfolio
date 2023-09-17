import Loading from "@/components/Loading/Loading";
import Main from "@/components/Main/Main";
import { ISkill } from "@/types/skills";
import TechStack from "@/utils/techstack";
import { NextPage } from "next";
import useSWR from "swr";

const Skills: NextPage = () => {
  const { data, error, isLoading } = useSWR<ISkill[], null>(
    "/api/skills",
    (url: string) => fetch(url).then((res) => res.json())
  );

  if (isLoading) {
    return (
      <Main title="Projects">
        <div className="flex flex-col h-full justify-center items-center">
          <Loading />
        </div>
      </Main>
    );
  }

  if (error) {
    return (
      <Main title="Projects">
        <div className="flex flex-col h-full justify-center items-center">
          Error
        </div>
      </Main>
    );
  }

  return (
    <Main title="Skills">
      <div className="flex flex-col gap-6 flex-wrap">
        {data?.map((skill, i) => {
          return (
            <div key={i} className="flex flex-col gap-4 flex-wrap">
              <p className="border-b border-black dark:border-white font-semibold w-fit">
                {skill.name}
              </p>
              <div className="flex gap-3 flex-wrap">
                {skill.subSkill.map((sub, j) => {
                  const color = TechStack(
                    sub.toUpperCase().replace(".", "").replace(" ", "")
                  );
                  return (
                    <div key={j} className={color + " " + "badge badge-lg"}>
                      {sub}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </Main>
  );
};

export default Skills;
