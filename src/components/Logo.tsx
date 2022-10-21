import Link from 'next/link';

export const Logo = () => (
  <Link
    href="/"
    className="flex h-[calc(1rem+9px)]  items-center justify-start"
  >
    <button className="flex h-[calc(1rem+9px)] w-fit  items-start justify-start ">
      {/* <div className="h-full w-1 flex-none bg-yellow-400 " /> */}
      <div className=" flex h-full w-full flex-row items-start justify-start md:items-end">
        <div className="flex w-full min-w-[12.5%] items-center justify-start bg-yellow-400 px-2  md:justify-end">
          <h1 className="self-end whitespace-nowrap  text-right font-mono text-[calc(1rem+1px)] font-black text-black">
            Dream Faster
          </h1>
        </div>
        <h2 className="flex h-full flex-none items-center justify-center whitespace-nowrap px-2 text-right font-mono text-sm text-black md:self-end">
          Studio
        </h2>
      </div>
      <div className="h-[calc(1rem+9px)] w-1 flex-none bg-yellow-400 md:hidden" />
    </button>
  </Link>
);
