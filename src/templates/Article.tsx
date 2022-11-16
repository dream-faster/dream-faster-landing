import type { ReactNode } from 'react';

import BreadcrumbSection from '@/components/BreadcrumbSection';

import OneSection from './OneSection';

type IMainProps = {
  children: ReactNode;
  nobreadcrumb?: boolean;
};

const Article = (props: IMainProps) => (
  <OneSection>
    <div className=" flex w-full flex-col items-start justify-around bg-white p-10 dark:bg-slate-900 md:col-span-4 ">
      {!props.nobreadcrumb && <BreadcrumbSection />}
      {props.children}
    </div>
  </OneSection>
);

export { Article };
