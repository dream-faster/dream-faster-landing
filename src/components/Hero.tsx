import { MajorButton } from './MajorButton';
import { ProfileCardSection } from './ProfileCardSection';

export const Hero = () => (
  <div className="flex h-full w-full flex-col justify-between md:min-h-[calc(100vh-16rem)]">
    <div className="absolute z-10 ml-[18px] h-5 w-1 bg-black outline-2 outline-white dark:bg-white md:ml-[-2px] " />
    <div className="flex h-full w-full flex-col justify-between">
      <article className=" prose prose-zinc h-full w-full max-w-2xl px-12 font-mono text-sm text-black dark:prose-invert dark:text-slate-300">
        <h2>Hi 👋</h2>
        We are an independent Machine Learning Research and Development Studio
        based in Berlin.
        <br />
        <br />
        <b>We aspire to:</b>
        <p className="ml-2 w-full">
          * make state of the art algorithms more convenient to access
          <br />
          * explore if ML practices hold up to scrutiny
          <br />
          * work with experts to develop useful tools and solutions to
          real-world problems
          <br />
          * revitalize forgotten ideas in AI
          <br />* create interpretable ML to expand human knowledge
        </p>
      </article>
      <ProfileCardSection />
    </div>
    <div className="px-12">
      <MajorButton text="Who we are" link="/about" />
      <MajorButton text="Collaborate with us" link="/collaborate" primary />
    </div>
  </div>
);
