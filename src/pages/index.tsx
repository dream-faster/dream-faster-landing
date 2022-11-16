import { Hero } from '@/components/Hero';
import { MajorButton } from '@/components/MajorButton';
import { MinorButton } from '@/components/MinorButton';
import ProjectsSection from '@/components/ProjectsSection';
import Seperator from '@/components/Seperator';
import { Meta } from '@/layouts/Meta';
import { getSortedPostsData } from '@/lib/projects';
import { getSortedTopicsData } from '@/lib/topics';
import { Main } from '@/templates/Main';
import OneSection from '@/templates/OneSection';

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
      <Seperator />
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
