import { getAllPostIds, getPostData } from '@/lib/posts';

import dynamic from 'next/dynamic';
import { Main } from '../../templates/Main.tsx';

// const Main = dynamic(() => import('../../templates/Main.tsx'), {
//   ssr: false,
// });

export default function Post({ postData }) {
  return (
    <Main>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
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
