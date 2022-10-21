import { MajorButton } from '@/components/MajorButton';

import { Logo } from './Logo';

const Menu = ({ wide }: { wide: boolean }) => (
  <div
    className={`left-0 z-20 flex h-20 w-screen flex-col place-items-center justify-center p-[19px]  md:grid  md:p-0 ${
      wide ? 'md:grid-cols-8' : 'md:grid-cols-6'
    }`}
  >
    <div />
    <Logo></Logo>

    {/* <div className="col-span-1" /> */}
    <div className="col-span-4 mt-2  hidden w-full flex-row justify-between self-start justify-self-start px-0 font-mono text-sm md:m-0 md:mr-2 md:flex md:h-full md:items-center md:justify-end md:justify-self-end">
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
