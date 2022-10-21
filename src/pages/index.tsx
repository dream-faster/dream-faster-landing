import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import ProjectsSection from '@/components/ProjectsSection';
import { Meta } from '@/layouts/Meta';
import { getSortedPostsData } from '@/lib/projects';
import { Main } from '@/templates/Main';
import OneSection from '@/templates/OneSection';

export default function Index({
  allPostsData,
}: {
  allPostsData: [string, string, string, string];
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
      <OneSection title="projects">
        <ProjectsSection allPostsData={allPostsData} />
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
  return {
    props: {
      allPostsData,
    },
  };
}
