import { getAllPostIds, getPostData } from '@/lib/projects';
import { useRouter } from 'next/router';
import { Main } from '../../templates/Main.tsx';

export default function Post({ postData }) {
  const router = useRouter();

  return (
    <Main wide={true}>
      <div className="grid h-screen w-screen grid-cols-1 place-items-start p-5 pt-0 md:grid-cols-8 md:p-0">
        <div />
        <div />
        <article className="prose prose-zinc  w-full md:col-span-4 p-10">
          <button
            onClick={() => router.back()}
            className="flex w-full justify-start items-end p-2 font-mono text-xs tracking-widest"
          >
            {' '}
            ← BACK
          </button>
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
