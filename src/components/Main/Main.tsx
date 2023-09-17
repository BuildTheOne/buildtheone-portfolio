import Head from "next/head";

type Props = {
  title?: string;
  children: React.ReactNode;
};

const Main = ({ title, children }: Props) => {
  return (
    <>
      <Head>
        <title>{title ? `${title} | Buildtheone` : "Buildtheone"}</title>
      </Head>

      <div className="flex flex-col px-4 h-full grow gap-4">
        {title ? (
          <h1 className="block font-bold text-2xl lg:hidden p-2 text-center">
            {title}
          </h1>
        ) : (
          <></>
        )}
        {children}
      </div>
    </>
  );
};

export default Main;
