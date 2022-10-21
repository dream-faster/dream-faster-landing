import { MajorButton } from './MajorButton';

export const Hero = () => (
  <div className="px-12 ">
    <p className="min-h-[50vh] font-mono text-sm text-black">
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
    <div>
      <MajorButton text="Who we are" link="/about" />
      <MajorButton text="Collaborate with us" link="/collaborate" primary />
    </div>
  </div>
);
