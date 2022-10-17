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
      meta={
        <Meta
          title="Dream Faster AI Studio"
          description="Independent R&D studio specialized in Artificial Intelligence."
        />
      }
    >
      {/* <div className="flex h-screen w-screen flex-col  "> */}
      <OneSection allPostsData={allPostsData} />
      {/* </div> */}
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
