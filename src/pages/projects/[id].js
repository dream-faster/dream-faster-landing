import { getAllPostIds, getPostData } from '@/lib/projects';
import { getSortedTopicsData } from '@/lib/topics';

import { Meta } from '@/layouts/Meta.tsx';
import { Main } from '@/templates/Main.tsx';
import { ProjectPage } from '@/components/ProjectPage.tsx';

export default function Post({ postData, filteredTopics }) {
  return (
    <Main
      wide={true}
      meta={
        <Meta
          title={`Project: ${postData.title} - Dream Faster | ML Research`}
          description={postData.description}
          social_card_ending="projects"
        />
      }
    >
      <ProjectPage
        data={postData}
        relatedData={filteredTopics}
        relatedType="topics"
      />
      {/* <Article
        title={`Project: ${postData.title} - Dream Faster | ML Research`}
        description={postData.description}
        social_card_ending="projects"
      >
        <article className="prose prose-zinc dark:prose-invert w-full ">
          <h3> {postData.description} </h3>
          <div
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
            className="dark:text-slate-100"
          />
        </article>
        <div className="border-top-2 border-top-yellow-400 mt-12 border-top-solid">
          <p className="mb-2">
            Interested in {postData.title} or projects like it? Get in touch
            with us:
          </p>
          <MajorButton
            text="Collaborate with us"
            link="/collaborate"
            primary={false}
          />
        </div>
      </Article> */}
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

// export async function getStaticProps({ params }) {
//   const postData = await getPostData(params.id);
//   return {
//     props: {
//       postData,
//     },
//   };
// }

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  const topicData = await getSortedTopicsData();

  const filteredTopics = topicData.filter((topic) =>
    postData.tag.split(',').includes(topic.tag.split(',')[0])
  );

  return {
    props: {
      postData,
      filteredTopics,
    },
  };
}
