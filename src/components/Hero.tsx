import { MajorButton } from './MajorButton';
import { ProfileCardSection } from './ProfileCardSection';

export const Hero = () => (
  <div className="flex h-full w-full flex-col justify-between md:min-h-[calc(100vh-16rem)]">
    <div className="absolute z-10 ml-[18px] h-5 w-1 bg-black outline-2 outline-white dark:bg-white md:ml-[-2px] " />
    <div className="flex h-full w-full flex-col justify-between">
      <article className=" prose prose-zinc h-full w-full max-w-2xl px-12 font-mono text-sm text-black dark:prose-invert dark:text-slate-300">
        <h2>Welcome 👋</h2>
        {/* <p className="underline decoration-yellow-400 underline-offset-2"> */}
        <p>
          <b>
            We are an independent Machine Learning Research and Development
            Studio based in Berlin.
          </b>
        </p>
      </article>

      <article className="prose prose-zinc h-full w-full max-w-2xl px-12 font-mono text-sm text-black opacity-60 dark:prose-invert dark:text-slate-300">
        <p className=" w-full whitespace-pre-line">
          {`\n`}We aspire to:{`\n`}
          {[
            'Work with experts to develop useful tools and solutions to real-world problems',
            // 'Revitalize forgotten ideas in AI',
            'Create interpretable ML to expand human knowledge',
            'Explore if ML practices hold up to scrutiny and revitalize forgotten ideas in AI',
            'Make state of the art algorithms more convenient to access',
          ].map((e) => `* ${e}\n`)}
        </p>
      </article>
    </div>
    <div>
      <div className="mt-6 flex flex-col flex-wrap px-12 md:flex-row">
        <ProfileCardSection />
        {/* <CommunityCardSection /> */}
      </div>
      <div className="-ml-2 px-12">
        <MajorButton text="Who we are" link="/about" />
        <MajorButton text="Collaborate with us" link="/collaborate" primary />
      </div>
    </div>
  </div>
);
