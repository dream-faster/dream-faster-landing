import router from 'next/router';
import type { ReactNode } from 'react';

import Breadcrumbs from '@/components/Breadcrumb';

import OneSection from './OneSection';

type IMainProps = {
  children: ReactNode;
};

const Article = (props: IMainProps) => (
  <OneSection>
    <div className=" flex w-full flex-col items-start justify-around bg-white p-10 dark:bg-slate-900 md:col-span-4 ">
      <div className="mb-10 flex w-full flex-row justify-around">
        <button
          onClick={() => router.back()}
          className="flex w-fit items-end justify-start whitespace-nowrap p-0 font-mono text-xs tracking-widest"
        >
          {' '}
          ← BACK
        </button>
        <Breadcrumbs />
      </div>
      {props.children}
    </div>
  </OneSection>
);

export { Article };
