import Link from 'next/link';

import { MajorButton } from '@/components/MajorButton';

const Menu = ({ wide }: { wide: boolean }) => (
  <div
    className={`left-0 z-20 flex h-28 w-screen flex-col place-items-center justify-center p-[19px]  md:grid  md:p-0 ${
      wide ? 'md:grid-cols-8' : 'md:grid-cols-6'
    }`}
  >
    <div />
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
          <h2 className="flex h-full items-center justify-center whitespace-nowrap px-2 text-right font-mono text-sm text-black md:self-end">
            Studio
          </h2>
        </div>
        <div className="h-[calc(1rem+9px)] w-1 flex-none bg-yellow-400" />
      </button>
    </Link>
    {/* <div className="col-span-1" /> */}
    <div className="col-span-4 mt-2 flex w-full flex-row justify-between self-start justify-self-start px-0 font-mono text-sm md:m-0 md:mr-2 md:flex md:h-full md:items-center md:justify-end md:justify-self-end">
      <MajorButton
        text="Collaborate with us"
        link="/collaborate"
        primary={false}
      />
      {/* <MajorButton text="Who are we" link="/about" primary={false} /> */}
    </div>
  </div>
);

export default Menu;
