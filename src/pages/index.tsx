import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const SolidLine = () => (
  <div className="h-screen border-r border-solid border-amber-400 opacity-30" />
);

const DashedLine = () => (
  <div className="hidden h-screen border-r border-dashed border-amber-400 opacity-30 md:block" />
);

const Background = () => (
  <div className="pointer-events-none absolute inset-y-0 left-0 flex h-screen w-screen flex-row justify-evenly">
    <SolidLine />

    <DashedLine />
    <div />
    <DashedLine />

    <SolidLine />
  </div>
);

type ProjectProps = {
  title: String;
  subtitle: String;
};

const Plus = () => (
  <div className="flex h-8 w-8 items-center justify-center">
    <div className="relative h-[3px] w-1/2 bg-black" />
    <div className="relative ml-[-29.7%] h-1/2 w-[3px] rounded bg-black" />
  </div>
);

const ProjectButton = (props: ProjectProps) => {
  const { title, subtitle } = props;

  return (
    <div className="my-2 flex w-full flex-row justify-between">
      <div className="ml-[-20px] flex items-center justify-center">
        <Plus />
        <div className="m-0 flex h-full flex-col justify-center p-6 ">
          <h1 className="font-mono text-sm font-bold text-black"> {title} </h1>
          <h2 className="font-mono text-sm text-black "> {subtitle} </h2>
        </div>
      </div>
      <div> GL </div>
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
          <div className="flex w-2/6 flex-col items-center justify-center">
            <ProjectButton
              title="Modular Pipelines"
              subtitle="Create complex ML pipelines"
            />
            <ProjectButton
              title="Drift"
              subtitle="Financial Market Prediction"
            />
            <ProjectButton
              title="Modular Pipelines"
              subtitle="Create complex ML pipelines"
            />
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Index;
