import Link from 'next/link';

import { MajorButton } from '@/components/MajorButton';
import { Meta } from '@/layouts/Meta';
import { getSortedPostsData } from '@/lib/projects';
import { getSortedTopicsData } from '@/lib/topics';
import { Article } from '@/templates/Article';
import { Main } from '@/templates/Main';

const getPosts = (allPostsData, baseUrl) => (
  <div className="flex h-full flex-col md:flex-row">
    {allPostsData.map(
      (e, i) =>
        i < 4 && (
          <div key={i}>
            <Link
              href={`/${baseUrl}/${e.id}`}
              className="whitespace-nowrap border-none no-underline"
            >
              {e.title}
            </Link>
            ,&nbsp;
          </div>
        )
    )}
  </div>
);

const standardOptions =
  '%0D%0D%0D%0D(optional) Deadline:%0D%0D(optional) Budget/Investment (with currency):%0D%0D(optional) Website:%0D%0D(optional) Alternate contact:';

const welcome = 'Hi Dream Faster Studio,%0D%0D ';
const goodbye = 'Best Regards,%0D%0D ';

const projectDescription = '%0D%0D⎯⎯⎯%0D%0D%0D%0D%0D⎯⎯⎯%0D%0D%0D';

const collaborationOptions = [
  {
    name: 'Proof of Concepts and MVPs',
    title:
      'Are you interested in building a Proof of Concept or MVP with our help?',
    description:
      'We build state-of-the-art Proof of Concepts and MVPs on a per case basis. We leverage custom tooling such as in projects like these:',
    emailSubject: 'Proof of Concept inquiry - [ Project Name ] - [ Pitch ]',
    emailBody: `${welcome}We are interested in collaborating with you!%0D%0D Here is the short pitch on the project we need help with:${projectDescription}${goodbye}${standardOptions}`,
    interactive: getPosts,
    baseUrl: 'projects',
  },
  {
    name: 'Technical Investment Advice',
    title:
      'Would you like to get technical advice on an investment you are about to make?',
    description: 'We help with overviewing technical advice in the domains of:',
    emailSubject: 'Technical Investment Advice inquiry - [ Project Name ]',
    emailBody: `${welcome}We are interested in getting a second opinion from you!%0D%0D Here is the short introduction to the project we need help with:${projectDescription}${goodbye}${standardOptions}`,
    interactive: getPosts,
    baseUrl: 'topics',
    // interactive: (x) => null,
  },
  {
    name: 'Angel Investment',
    title: 'Are you looking for investors that understand challenges in R&D?',
    description:
      'We leverage our network to connect startups to angel investors, often co-investing.',
    emailSubject: 'Looking for Angel Investment inquiry - [ Project Name ]',
    emailBody: `${welcome}We are currently raising money!%0D%0D Here is the short introduction to our product:${projectDescription}${goodbye}${standardOptions}`,
    interactive: (x) => null,
  },
];

const Collaborate = ({
  allPostsData,
  allTopicsData,
}: {
  allPostsData: [string, string, string, string];
  allTopicsData: [string, string, string, string];
}): JSX.Element => (
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
    {collaborationOptions.map((option, i) => (
      // <OneSection key={i} title={`${option.name} 👇`}>
      <div key={i} className="h-full w-full">
        <Article nobreadcrumb={i !== 0} key={i}>
          <article className="prose prose-zinc w-full dark:prose-invert ">
            <h2 className="text-yellow-500">{option.name}</h2>
            <h3>{option.title}</h3>
            <p>
              {option.description}
              {option.interactive(
                option.baseUrl === 'projects' ? allPostsData : allTopicsData,
                option.baseUrl
              )}
            </p>
            <MajorButton
              solo
              external
              primary
              text="Send an email"
              link={`mailto:info@fasterdream.com?subject=${option.emailSubject}&body=${option.emailBody}`}
            />
          </article>
        </Article>
        <div className="h-12" />
      </div>
      // </OneSection>
    ))}
    <div className="h-24" />
  </Main>
);

export default Collaborate;

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const allTopicsData = getSortedTopicsData();
  return {
    props: {
      allPostsData,
      allTopicsData,
    },
  };
}
