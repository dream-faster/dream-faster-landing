import { useRouter } from 'next/router';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

// const SolidLine = () => (
//   <div className="h-screen border-r border-solid border-yellow-300 opacity-30" />
// );

// const DashedLine = () => (
//   <div className="hidden h-screen border-r border-dashed border-yellow-300 opacity-30 md:block" />
// );

const Background = () => (
  <div className="pointer-events-none absolute inset-y-0 left-0 grid h-screen w-screen grid-cols-1 place-items-center  px-6 md:grid-cols-6">
    <div className="hidden h-screen w-full border-r border-dashed border-yellow-300 opacity-30 md:block md:border-solid" />
    <div className="hidden h-screen w-full md:block" />
    <div className="h-screen w-full border-x border-solid border-yellow-300 opacity-30 md:col-span-2 md:border-dashed" />
    <div className="hidden h-screen w-full md:block" />
    <div className="hidden h-screen w-full border-l border-dashed border-yellow-300 opacity-30 md:block md:border-solid" />
  </div>
);
// const Background = () => (
//   <div className="pointer-events-none absolute inset-y-0 left-0 grid h-screen w-screen grid-cols-3 place-items-center p-0  p-8 md:grid-cols-6 md:p-2">
//     <SolidLine />

//     <DashedLine />
//     <div />
//     <DashedLine />

//     <SolidLine />
//   </div>
// );

type ProjectProps = {
  title: string;
  subtitle: string;
  url: string;
};

// const Plus = () => (
//   <div className="m-0 flex h-[calc(2rem)] w-[calc(2rem)]  p-0">
//     <div className="relative left-[calc((2rem/4))] top-[calc((2rem/2)-1px)] h-[3px] w-[calc(2rem/2)] bg-black" />
//     <div className="relative left-[-1px] top-[calc(2rem/4)] h-[calc((2rem/2))] w-[3px] rounded bg-black" />
//   </div>
// );
const Plus = () => (
  <div className="m-0 flex  flex-none flex-col justify-center p-1 group-hover:bg-yellow-400">
    <div className="m-0 h-[calc(1rem+1px)] w-[calc(1rem+1px)] flex-none p-0">
      <div className="relative top-[calc(0.5rem-1px)] left-0  m-0 h-[3px] w-full bg-black p-0 group-hover:bg-white" />
      <div className="relative  left-[calc(0.5rem-1px)] top-[-3px] m-0 h-full w-[3px] bg-black p-0 group-hover:bg-white" />
    </div>
  </div>
);
// const Plus = () => (
//   <div className="m-0 flex h-[calc(2rem-1px)] w-[calc(2rem-1px)]  p-0">
//     <div className="relative left-[calc((2rem/4)-1px)] top-[calc((2rem/2)-2px)] h-[3px] w-[calc(2rem/2+1px)] bg-black" />
//     <div className="relative left-[-3px] top-[calc(2rem/4-1px)] h-[calc((2rem/2)+1px)] w-[3px] rounded bg-black" />
//   </div>
// );

const ProjectButton = (props: ProjectProps) => {
  const { title, subtitle, url } = props;
  const router = useRouter();

  return (
    <div className="my-2 ml-2 flex w-full flex-row items-center justify-between md:mx-[-16px] md:w-[calc(100%+16px)] md:px-0">
      <div className=" group flex w-full items-start justify-center">
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
      </div>
      <a
        href={url}
        className=" m-0 flex h-[calc(1rem+1px)] w-[calc(1rem+1px)] items-center justify-center p-0"
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
