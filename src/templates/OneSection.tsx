import type { ReactNode } from 'react';

const OneSection = ({
  children,
  wide,
  title,
  background_full,
}: {
  children: ReactNode;
  wide: boolean;
  title: string;
  background_full?: boolean;
}) => (
  <div
    className={`flex h-full flex-col items-center justify-center ${
      background_full ? 'bg-yellow-400' : 'bg-neutral-100'
    }`}
  >
    {background_full ? null : (
      <p
        className={`md: my-2 flex w-full justify-start pl-9 font-mono text-xs tracking-widest ${
          wide ? 'md:w-1/2' : 'md:w-2/6'
        }`}
      >
        {title.toUpperCase()}
      </p>
    )}
    <div
      className={`flex w-full flex-col items-center justify-center ${
        background_full ? 'bg-transparent' : 'bg-white'
      } ${wide ? 'md:w-3/4' : 'md:w-2/6'}`}
    >
      <div
        className={`flex w-full flex-col items-center justify-center ${
          background_full ? 'bg-transparent' : 'bg-white'
        } py-6 ${wide ? 'md:w-2/3' : 'md:w-2/6'}`}
      >
        {children}
      </div>
    </div>
  </div>
);

export default OneSection;
