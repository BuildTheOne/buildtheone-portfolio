import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { TechStack } from "@/utils/tech";
import { readFileSync } from "fs";
import Link from "next/link";
import { join } from "path";

interface Project {
  name: string;
  desc: string;
  link?: string;
  techstack: string[];
}

async function WorkPage() {
  const projectRawData = readFileSync(
    join(process.cwd(), "src/data", "projects.json"),
  ).toString();
  const projectData: Project[] = JSON.parse(projectRawData);

  return (
    <>
      <h1>Works</h1>
      <div className="mt-4 grid md:grid-cols-2 gap-4">
        {projectData.map((project) => (
          <Link key={project.name} href={project.link ?? "#"} target="_blank">
            <div className="flex flex-col gap-2 p-4 border border-black dark:border-white rounded-lg h-full">
              <p className="font-bold text-xl">{project.name}</p>
              <p className="text-base">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.techstack.map((stack, i) => (
                  <Badge
                    key={i}
                    variant="outline"
                    className={cn(TechStack(stack), "text-sm")}
                  >
                    {stack}
                  </Badge>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default WorkPage;
