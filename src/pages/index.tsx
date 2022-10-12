import { useRouter } from 'next/router';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const SolidLine = () => (
  <div className="h-screen border-r border-solid border-amber-400 opacity-30" />
);

const DashedLine = () => (
  <div className="hidden h-screen border-r border-dashed border-amber-400 opacity-30 md:block" />
);

const Background = () => (
  <div className="pointer-events-none absolute inset-y-0 left-0 grid h-screen w-screen grid-cols-1  justify-evenly p-8 md:grid-cols-6">
    <SolidLine />

    <DashedLine />
    <div />
    <DashedLine />

    <SolidLine />
  </div>
);

type ProjectProps = {
  title: string;
  subtitle: string;
  url: string;
};

const Plus = () => (
  <div className=" m-0 flex h-8 w-8 items-center justify-center p-0">
    <div className="relative h-[3px] w-1/2 bg-black" />
    <div className="relative ml-[-29.7%] h-1/2 w-[3px] rounded bg-black" />
  </div>
);

const ProjectButton = (props: ProjectProps) => {
  const { title, subtitle, url } = props;
  const router = useRouter();

  return (
    <div className="mx-[-17px] my-2 flex w-[calc(100%+17px)] flex-row justify-between">
      <div className=" flex items-center justify-center">
        <Plus />
        <div className="m-0 flex h-full flex-col justify-center p-6 ">
          <h1 className="font-mono text-sm font-bold text-black"> {title} </h1>
          <h2 className="font-mono text-sm text-black "> {subtitle} </h2>
        </div>
      </div>
      <a
        href={url}
        className=" m-0 flex h-8 w-8 items-center justify-center p-0"
      >
        <img
          src={`${router.basePath}/assets/images/github.svg`}
          alt="Nextjs starter banner"
        />
      </a>
    </div>
  );
};

const Index = () => {
  // const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <div className="absolute inset-y-0 left-0 flex h-screen w-screen flex-col  bg-neutral-100">
        <Background />
        <div className="h-20 w-screen bg-white" />
        <div className="flex h-full w-screen items-start justify-center">
          <div className="flex w-full flex-col items-center justify-center md:w-2/6">
            {/* <div className="grid grid-cols-1 md:grid-cols-6"> */}
            <ProjectButton
              title="Modular Pipelines"
              subtitle="Create complex ML pipelines"
              url="https://github.com/applied-exploration/modular-pipelines"
            />
            <ProjectButton
              title="Drift"
              subtitle="Financial Market Prediction"
              url="https://github.com/applied-exploration/drift"
            />
            <ProjectButton
              title="Recommendation Engine"
              subtitle="Graph Neural Networks"
              url="https://github.com/applied-exploration/drift"
            />
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Index;
