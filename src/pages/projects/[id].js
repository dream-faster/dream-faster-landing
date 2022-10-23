import { getAllPostIds, getPostData } from '@/lib/projects';
import { MajorButton } from '@/components/MajorButton.tsx';
import { Article } from '@/templates/Article.tsx';

export default function Post({ postData }) {
  return (
    <Article>
      <article className="prose prose-zinc dark:prose-invert w-full ">
        <h3> {postData.description} </h3>
        <div
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          className="dark:text-slate-100"
        />
      </article>
      <div className="border-top-2 border-top-yellow-400 mt-12 border-top-solid">
        <p className="mb-2">
          Interested in {postData.title} or projects like it? Get in touch with
          us:
        </p>
        <MajorButton
          text="Collaborate with us"
          link="/collaborate"
          primary={false}
        />
      </div>
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
