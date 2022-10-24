import Script from 'next/script';
import type { ReactNode } from 'react';

import Background from '@/components/Background';
import { Footer } from '@/components/Footer';
import Menu from '@/components/Menu';

import OneSection from './OneSection';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
  wide: boolean;
};

const Main = (props: IMainProps) => (
  <div className="h-full min-h-screen w-screen overflow-hidden bg-zinc-100 text-gray-700 antialiased dark:bg-slate-800">
    <Script
      src="https://cdn.counter.dev/script.js"
      data-id="4652b1fe-0a4c-4510-ab82-1036a5f6f75f"
      data-utcoffset="1"
    />
    {props.meta}
    <Menu wide={props.wide} />
    {props.children}
    <Background wide={props.wide} />
    <OneSection background_full={true}>
      <Footer />
    </OneSection>
  </div>
);

export { Main };
