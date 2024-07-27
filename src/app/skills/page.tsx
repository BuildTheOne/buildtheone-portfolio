import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { TechStack } from "@/utils/tech";
import { readFileSync } from "fs";
import { join } from "path";

interface Skill {
  name: string;
  skill: string[];
}

async function SkillPage() {
  const skillRawData = readFileSync(
    join(process.cwd(), "src/data", "skills.json"),
  ).toString();
  const skillData: Skill[] = JSON.parse(skillRawData);

  return (
    <>
      <h1>Skills</h1>
      <div className="mt-4 flex flex-col gap-8">
        {skillData.map((skill) => (
          <div key={skill.name} className="flex flex-col gap-4">
            <p className="underline underline-offset-8">{skill.name}</p>
            <div className="flex gap-2 flex-wrap">
              {skill.skill.map((subSkill) => (
                <Badge
                  key={subSkill}
                  variant="outline"
                  className={cn(TechStack(subSkill), "text-sm")}
                >
                  <p className="">{subSkill}</p>
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default SkillPage;
