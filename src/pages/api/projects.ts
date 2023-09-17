import { IProject } from "@/types/projects";
import { promises as fs } from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import path from "path";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProject[]>
) {
  const jsonDirectory = path.join(process.cwd(), "src/data");
  const fileContents = await fs.readFile(
    jsonDirectory + "/projects.json",
    "utf8"
  );
  const result: IProject[] = JSON.parse(fileContents);
  res.status(200).json(result);
}
