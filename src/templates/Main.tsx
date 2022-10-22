import type { ReactNode } from 'react';

import Background from '@/components/Background';
import Menu from '@/components/Menu';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
  wide: boolean;
};

const Main = (props: IMainProps) => (
  <div className="h-full w-screen overflow-hidden bg-zinc-100 text-gray-700 antialiased">
    {props.meta}
    <Menu wide={props.wide} />
    {props.children}
    <Background wide={props.wide} />
  </div>
);

export { Main };
