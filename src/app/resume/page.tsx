import { Button } from "@/components/ui/button";
import Link from "next/link";

function ResumePage() {
  return (
    <>
      <h1>Resume</h1>
      <div className="mt-4 w-full flex flex-col items-center">
        <Link href={"/CV_IgnatiusHenriyantoPrimaiRenda.pdf"} target="_blank">
          <Button variant="outline" className="flex gap-2 px-3">
            <p className="">Download CV</p>
            <span className="material-symbols-outlined">download</span>
          </Button>
        </Link>
      </div>
    </>
  );
}

export default ResumePage;
