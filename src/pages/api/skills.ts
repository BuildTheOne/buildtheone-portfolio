import { ISkill } from "@/types/skills";
import { promises as fs } from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import path from "path";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ISkill[]>
) {
  const jsonDirectory = path.join(process.cwd(), "src/data");
  const fileContents = await fs.readFile(
    jsonDirectory + "/skills.json",
    "utf8"
  );
  const result: ISkill[] = JSON.parse(fileContents);
  res.status(200).json(result);
}
