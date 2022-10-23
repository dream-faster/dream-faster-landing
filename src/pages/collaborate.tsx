import Form from '@/components/Form';
import { Article } from '@/templates/Article';

const About = () => (
  <Article title="About us - Dream Faster | ML Research" description="About us">
    <article className="prose prose-zinc w-full dark:prose-invert ">
      <Form />
    </article>
  </Article>
);

export default About;
