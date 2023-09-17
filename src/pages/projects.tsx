import Loading from "@/components/Loading/Loading";
import Main from "@/components/Main/Main";
import { IProject } from "@/types/projects";
import TechStack from "@/utils/techstack";
import { NextPage } from "next";
import Link from "next/link";
import useSWR from "swr";

const Projects: NextPage = () => {
  const { data, error, isLoading } = useSWR<IProject[], null>(
    "/api/projects",
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
    <Main title="Projects">
      <div className="grid md:grid-cols-2 gap-4">
        {data?.map((project, i) => {
          return (
            <Link key={i} href={project.link ?? "#"} target="_blank">
              <div className="card card-compact bg-white dark:bg-neutral">
                <div className="card-body">
                  <p className="card-title">{project.name}</p>
                  <p className="">{project.desc}</p>
                  <div className="flex gap-2 flex-wrap">
                    {project.techstack.map((tech, j) => {
                      const color = TechStack(
                        tech.toUpperCase().replace(".", "").replace(" ", "")
                      );
                      return (
                        <div key={j} className={color + " " + "badge badge-lg"}>
                          {tech}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </Main>
  );
};

export default Projects;
