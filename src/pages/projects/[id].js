import { getAllPostIds, getPostData } from '@/lib/projects';
import { Article } from '../../templates/Article.tsx';

export default function Post({ postData }) {
  return (
    <Article>
      <article className="prose prose-zinc  w-full">
        <h3> {postData.description} </h3>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Article>
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
