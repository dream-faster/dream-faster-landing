import ProjectsSection from '@/components/ProjectsSection';
import { Meta } from '@/layouts/Meta';
import { getSortedTopicsData } from '@/lib/topics';
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
          title="Topics >> Dream Faster AI Studio"
          description="Independent R&D studio specialized in Artificial Intelligence."
          social_card_ending="topics"
        />
      }
    >
      <OneSection title="topics 👇">
        <ProjectsSection allPostsData={allPostsData} baseUrl="topics" />
      </OneSection>
    </Main>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedTopicsData();
  return {
    props: {
      allPostsData,
    },
  };
}
