import { MajorButton } from '@/components/MajorButton';
import { ProfileCardSection } from '@/components/ProfileCardSection';
import { Meta } from '@/layouts/Meta';
import { Article } from '@/templates/Article';
import { Main } from '@/templates/Main';

const About = () => (
  <Main
    wide={true}
    meta={
      <Meta
        title="About us - Dream Faster | ML Research"
        description="About us"
        social_card_ending="aboutus"
      />
    }
  >
    <Article>
      <article className="prose prose-zinc w-full dark:prose-invert ">
        <h2> Studio </h2>
        <p>
          We are Dream Faster, a Machine Learning Research Studio specialized in
          translating State-of-the-Art algorithms into practical use-cases.
          Based in Berlin, we currently collaborate with Machine Learning
          Practicioners and Researcherss across Europe and the Americas.
          <br />
          <br />
          Some of the topics we are interested in:
          <br />
          - Code Intelligence with Machine Learning
          <br />
          - Graph Neural Networks
          <br />
          - Timeseries analysis and decision under uncertainity
          <br />
          - Neuro-symbolic approaches, eg. symbolic regression.
          <br />
          <div className="mt-6 flex  w-full flex-col flex-wrap md:flex-row">
            <ProfileCardSection large />
          </div>
          <br />
          <h2> Community </h2>
          Since 2021 we have been developing a community of likeminded
          individuals, who we meet weekly for: Project Demonstrations and Deep
          Dives Mini-lectures on computational topics, eg.: Caustics Paper
          Reviews on new, exciting papers. If you would like to apply to the
          community then DM us on @hellosemy or @itchingpixels to join the
          family.
          <br />
          <br />
          Become part of the journey in experimenting with a new way of
          organising technological spin-offs. We write deep insights into what
          went well and wrong in our projects, and show the state of affairs in
          those segments.
          <br />
        </p>
        Subscribe here:
        <MajorButton
          text="Applied Exploration Blog"
          link="https://appliedexploration.substack.com/"
          external
        />
      </article>
    </Article>
  </Main>
);

export default About;
