import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { MajorButton } from '@/components/MajorButton';
import ProjectsSection from '@/components/ProjectsSection';
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
        />
      }
    >
      <OneSection>
        <Hero />
      </OneSection>
      <OneSection title="projects 👇">
        <ProjectsSection allPostsData={allPostsData} baseUrl="projects" />
      </OneSection>
      <OneSection title="links 👇">
        <div>
          <MajorButton
            text="GitHub Organisation"
            link="https://github.com/applied-exploration"
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
        <ProjectsSection allPostsData={allTopicsData} baseUrl="topics" />
      </OneSection>
      <div className="h-28" />
      <OneSection background_full={true}>
        <Footer />
      </OneSection>
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
