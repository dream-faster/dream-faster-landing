import { MajorButton } from '@/components/MajorButton';
import { Meta } from '@/layouts/Meta';
import { Article } from '@/templates/Article';
import { Main } from '@/templates/Main';

const About = () => (
  <Main
    wide={true}
    meta={
      <Meta
        title="Collaborate - Dream Faster | ML Research"
        description="Collaborate with us"
        social_card_ending="collaborate"
      />
    }
  >
    <Article>
      <article className="prose prose-zinc w-full dark:prose-invert ">
        {/* <Form /> */}
        <MajorButton
          external
          text="Send an email"
          link="mailto:info@fasterdream.com"
        />
      </article>
    </Article>
  </Main>
);

export default About;
