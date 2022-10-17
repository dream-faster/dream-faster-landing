import { useRouter } from 'next/router';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import { getSortedPostsData } from '../lib/posts';

const Background = () => (
  <div className="pointer-events-none absolute inset-y-0 left-0 grid h-screen w-screen grid-cols-1 place-items-center  px-6 md:grid-cols-6">
    <div className="hidden h-screen w-full border-r border-dashed border-yellow-300 opacity-100 md:block md:border-solid" />
    <div className="hidden h-screen w-full md:block" />
    <div className="h-screen w-full border-x border-solid border-yellow-300 opacity-100 md:col-span-2 md:border-dashed" />
    <div className="hidden h-screen w-full md:block" />
    <div className="hidden h-screen w-full border-l border-dashed border-yellow-300 opacity-100 md:block md:border-solid" />
  </div>
);

type ProjectProps = {
  title: string;
  subtitle: string;
  url: string;
  linkto: string;
};

const Plus = () => (
  <div className="m-0 flex  flex-none flex-col justify-center p-1 group-hover:bg-yellow-400">
    <div className="m-0 h-[calc(1rem+1px)] w-[calc(1rem+1px)] flex-none p-0">
      <div className="relative top-[calc(0.5rem-1px)] left-0  m-0 h-[3px] w-full bg-black p-0 group-hover:bg-white" />
      <div className="relative  left-[calc(0.5rem-1px)] top-[-3px] m-0 h-full w-[3px] rounded bg-black p-0 group-hover:bg-white" />
    </div>
  </div>
);

const ProjectButton = (props: ProjectProps) => {
  const { title, subtitle, url, linkto } = props;
  const router = useRouter();

  return (
    <div className="my-2 ml-2 flex w-full flex-row items-center justify-between md:mx-[-16px] md:w-[calc(100%+16px)] md:px-0">
      <a
        href={linkto}
        className=" group flex w-full items-start justify-center hover:border-none "
      >
        <Plus />
        <div className="m-0 flex h-full w-full flex-col justify-center px-6">
          <div className="flex h-full items-center py-1  group-hover:bg-yellow-400">
            <h1 className="flex h-[calc(1rem+1px)] w-full items-center pl-4 align-middle font-mono text-[calc(1rem+1px)] font-bold text-black ">
              {' '}
              {title}
            </h1>
          </div>
          <h2 className="pl-4 font-mono text-sm text-black"> {subtitle} </h2>
        </div>
      </a>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className=" m-0 flex h-[calc(1rem+1px)] w-[calc(1rem+1px)] items-center justify-center p-0  hover:border-none"
      >
        <img
          src={`${router.basePath}/assets/images/github.svg`}
          alt="Nextjs starter banner"
          className="fill-white "
        />
      </a>
    </div>
  );
};

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
      <div className="absolute inset-y-0 left-0 flex h-screen w-screen flex-col  bg-neutral-100">
        <Background />
        <div className="h-20 w-screen bg-white" />
        <div className="flex h-full w-screen items-start justify-center">
          <div className="flex w-full flex-col items-center justify-center md:w-2/6">
            {allPostsData.map(({ id, date, title, description }) => (
              <ProjectButton
                key={id}
                title={title}
                subtitle={description}
                url="https://github.com/applied-exploration/modular-pipelines"
                linkto={`/posts/${id}`}
              />
            ))}
          </div>
        </div>
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
