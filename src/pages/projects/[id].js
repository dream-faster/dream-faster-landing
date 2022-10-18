import { getAllPostIds, getPostData } from '@/lib/projects';

import { Main } from '../../templates/Main.tsx';

export default function Post({ postData }) {
  return (
    <Main wide={true}>
      <div className="grid h-screen w-screen grid-cols-1 place-items-start p-5 pt-0 md:grid-cols-8 md:p-0">
        <div />
        <div />
        <article className="prose prose-zinc dark:prose-invert w-full md:col-span-4 p-10">
          <h3> {postData.description} </h3>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </div>
    </Main>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
