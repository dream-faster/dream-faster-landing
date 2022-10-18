import Link from 'next/link';

const Menu = ({ wide }: { wide: boolean }) => (
  <div
    className={`left-0 z-20 grid h-28 w-screen grid-cols-1 place-items-center  p-5  md:p-0 ${
      wide ? 'md:grid-cols-8' : 'md:grid-cols-6'
    }`}
  >
    <div />
    <Link
      href="/"
      className="flex h-[calc(1rem+9px)] w-[calc(100%+5px)] items-center justify-center"
    >
      <button className="flex h-[calc(1rem+9px)] w-full items-start justify-start">
        <div className="h-full w-1 flex-none bg-yellow-400 " />
        <div className="mx-1  flex w-full flex-col items-start md:items-end">
          <div className="flex w-full items-center justify-start bg-yellow-400 px-2 md:justify-end">
            <h1 className="self-end whitespace-nowrap  text-right font-mono text-[calc(1rem+1px)] font-black text-black">
              Dream Faster
            </h1>
          </div>
          <h2 className="whitespace-nowrap px-2 text-right font-mono text-sm text-black  md:self-end">
            Studio
          </h2>
        </div>
        <div className="h-[calc(1rem+9px)] w-1 flex-none bg-yellow-400" />
      </button>
    </Link>
  </div>
);

export default Menu;
