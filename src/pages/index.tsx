import { Meta } from '@/layouts/Meta';
import { getSortedPostsData } from '@/lib/posts';
import { Main } from '@/templates/Main';

import OneSection from './post_index';

export default function Index({
  allPostsData,
}: {
  allPostsData: [string, string, string, string];
}) {
  // const router = useRouter();

  return (
    <Main
      wide={false}
      meta={
        <Meta
          title="Dream Faster AI Studio"
          description="Independent R&D studio specialized in Artificial Intelligence."
        />
      }
    >
      <OneSection allPostsData={allPostsData} />
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
