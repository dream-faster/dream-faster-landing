import router from 'next/router';
import type { ReactNode } from 'react';

import Breadcrumbs from '@/components/Breadcrumb';
import { Meta } from '@/layouts/Meta';

import { Main } from './Main';

type IMainProps = {
  children: ReactNode;
  title: string;
  description: string;
};

const Article = (props: IMainProps) => (
  <Main
    wide={true}
    meta={<Meta title={props.title} description={props.description} />}
  >
    <div className="grid h-fit min-h-screen w-screen grid-cols-1 place-items-start bg-white p-5 pt-0 dark:bg-slate-900 md:grid-cols-8 md:p-0">
      <div className="hidden md:block" />
      <div className="hidden md:block" />

      <div className=" flex w-full flex-col items-start justify-around p-10 md:col-span-4">
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
    </div>
  </Main>
);

export { Article };
