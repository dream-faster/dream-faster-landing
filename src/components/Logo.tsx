import Link from 'next/link';

export const Logo = () => (
  <Link
    href="/"
    className="flex h-[calc(1rem+9px)]  items-center justify-center"
  >
    <button className="flex h-[calc(1rem+9px)] w-full  items-start justify-start ">
      <div className="h-full w-1 flex-none bg-yellow-400 " />
      <div className="mx-1 flex h-full w-full  flex-row items-start md:items-end">
        <div className="flex w-full items-center justify-start bg-yellow-400 px-2  md:justify-end">
          <h1 className="self-end whitespace-nowrap  text-right font-mono text-[calc(1rem+1px)] font-black text-black">
            Dream Faster
          </h1>
        </div>
        <h2 className="flex h-full flex-none items-center justify-center whitespace-nowrap px-2 text-right font-mono text-sm text-black md:self-end">
          Studio
        </h2>
      </div>
      <div className="h-[calc(1rem+9px)] w-1 flex-none bg-yellow-400" />
    </button>
  </Link>
);
