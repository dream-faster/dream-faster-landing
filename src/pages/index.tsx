import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const SolidLine = () => (
  <div className="h-screen border-r border-solid border-amber-400 opacity-30" />
);

const DashedLine = () => (
  <div className="h-screen border-r border-dashed border-amber-400 opacity-30" />
);

const Background = () => (
  <span className="absolute inset-y-0 left-0 flex h-screen w-screen flex-row justify-evenly">
    <SolidLine />
    {[0, 1].map((i) => (
      <DashedLine key={i} />
    ))}

    <SolidLine />
  </span>
);

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
      <span className="absolute inset-y-0 left-0 flex h-screen w-screen flex-col">
        <div className="h-20 w-screen bg-white" />
        <div className="h-screen w-screen bg-neutral-100">
          <p className="font-mono text-sm text-black ">
            {' '}
            This is an example text{' '}
          </p>
        </div>
      </span>
      <Background />
    </Main>
  );
};

export default Index;
