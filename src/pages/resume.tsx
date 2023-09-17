import Main from "@/components/Main/Main";
import { NextPage } from "next";
import Link from "next/link";
import { MdDownload } from "react-icons/md";

const CV: NextPage = () => {
  return (
    <Main title="Resume">
      <div className="flex justify-center">
        <Link href={"/CV_IgnatiusHenriyantoPrimaiRenda.pdf"} target="_blank">
          <button className="btn">
            <p className="">Download</p>
            <MdDownload className="w-6 h-6" />
          </button>
        </Link>
      </div>
    </Main>
  );
};

export default CV;
