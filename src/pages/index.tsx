import Link from 'next/link';

import { Hero } from '@/components/Hero';
import { MajorButton } from '@/components/MajorButton';
import ProjectsSection from '@/components/ProjectsSection';
import { Meta } from '@/layouts/Meta';
import { getSortedPostsData } from '@/lib/projects';
import { getSortedTopicsData } from '@/lib/topics';
import { Main } from '@/templates/Main';
import OneSection from '@/templates/OneSection';

const MinorButton = ({ text, to }: { text: string; to: string }) => (
  <Link href={to}>
    <a className=" m-6 self-end justify-self-end border-none font-mono text-black no-underline hover:border-b-2 hover:border-b-yellow-400 hover:text-yellow-400">
      {text} ➡
    </a>
  </Link>
);

export default function Index({
  allPostsData,
  allTopicsData,
}: {
  allPostsData: [string, string, string, string];
  allTopicsData: [string, string, string, string];
}): JSX.Element {
  // const router = useRouter();

  return (
    <Main
      wide={true}
      meta={
        <Meta
          title="Dream Faster AI Studio"
          description="Independent R&D studio specialized in Artificial Intelligence."
          social_card_ending="landing"
        />
      }
    >
      <OneSection>
        <Hero />
      </OneSection>
      <OneSection title="projects 👇">
        <ProjectsSection allPostsData={allPostsData} baseUrl="projects" />
        <MinorButton to="/projects" text="All Projects" />
      </OneSection>
      <OneSection title="links 👇">
        <div className="flex flex-col flex-wrap items-start justify-start px-8 md:flex-row">
          <MajorButton
            text="GitHub Organisation"
            link="https://github.com/dream-faster"
            external
          />
          <MajorButton
            text="Applied Exploration Blog"
            link="https://www.appliedexploration.com/"
            external
            primary
          />
        </div>
      </OneSection>
      <OneSection title="topics 👇">
        <ProjectsSection allPostsData={allTopicsData} baseUrl="topics" all />
        <MinorButton to="/topics" text="All Topics" />
      </OneSection>
      <div className="h-28" />
    </Main>
  );
}

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
