import { MajorButton } from '@/components/MajorButton';
import { Article } from '@/templates/Article';

const About = () => (
  <Article title="About us - Dream Faster | ML Research" description="About us">
    <article className="prose prose-zinc w-full dark:prose-invert ">
      {/* <Form /> */}
      <MajorButton
        external
        text="Send an email"
        link="mailto:info@fasterdream.com"
      />
    </article>
  </Article>
);

export default About;
