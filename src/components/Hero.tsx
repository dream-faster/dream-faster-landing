import { MajorButton } from './MajorButton';

export const Hero = () => (
  <div>
    <div className="absolute z-10 ml-[18px] h-5 w-1 bg-black outline-2 outline-white dark:bg-white md:ml-[-2px] " />

    <p className="min-h-[50vh] px-12  font-mono text-sm text-black dark:text-slate-300">
      We are an independent Machine Learning Research and Development Studio
      based in Berlin.
      <br />
      <br />
      We love to:
      <br />
      &emsp;- make state of the art algorithms more convenient to access
      <br />
      &emsp;- explore if ML practices hold up to scrutiny
      <br />
      &emsp;- work with experts to develop useful tools and solutions to
      real-world problems
    </p>
    <div className="px-12">
      <MajorButton text="Who we are" link="/about" />
      <MajorButton text="Collaborate with us" link="/collaborate" primary />
    </div>
  </div>
);
