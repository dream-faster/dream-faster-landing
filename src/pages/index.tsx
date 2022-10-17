import Background from '@/components/Background';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import { getSortedPostsData } from '../lib/posts';
import OneSection from './post_index';

const Menu = () => (
  <div className="   left-0 grid h-28  w-screen grid-cols-1 place-items-center   md:grid-cols-6 md:p-0">
    <div />
    <div className="flex h-[calc(1rem+9px)] w-[calc(100%+5px)] items-center justify-center">
      <div className="flex h-full w-full items-start justify-start">
        <div className="h-full w-1 flex-none bg-yellow-400 " />
        <div className="mx-1  flex w-full flex-col ">
          <div className="flex w-full items-center justify-end bg-yellow-400 px-2">
            <h1 className="self-end whitespace-nowrap  text-right font-mono text-[calc(1rem+1px)] font-black text-black">
              Dream Faster
            </h1>
          </div>
          <h2 className="self-end whitespace-nowrap pr-2 text-right font-mono text-sm  text-black">
            Studio
          </h2>
        </div>
        <div className="h-full w-1 flex-none bg-yellow-400" />
      </div>
    </div>
  </div>
);

export default function Index({ allPostsData }) {
  // const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="Dream Faster AI Studio"
          description="Independent R&D studio specialized in Artificial Intelligence."
        />
      }
    >
      <div className="absolute inset-y-0 left-0 flex h-screen w-screen flex-col  ">
        <Background />
        <Menu />
        <OneSection allPostsData={allPostsData} />
      </div>
    </Main>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
