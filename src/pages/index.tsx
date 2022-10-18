import OneSection from '@/components/OneSection';
import { Meta } from '@/layouts/Meta';
import { getSortedPostsData } from '@/lib/projects';
import { Main } from '@/templates/Main';

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
      <OneSection wide={true} allPostsData={allPostsData} />
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
