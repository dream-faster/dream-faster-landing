import { getAllTopicIds, getTopicData } from '@/lib/topics';
import { MajorButton } from '@/components/MajorButton.tsx';
import { Article } from '@/templates/Article.tsx';
import { getSortedPostsData } from '@/lib/projects';

export default function Post({ topicData, filteredProjects }) {
  return (
    <Article>
      <article className="prose prose-zinc dark:prose-invert w-full ">
        <h3> {topicData.description} </h3>
        <div
          dangerouslySetInnerHTML={{ __html: topicData.contentHtml }}
          className="dark:text-slate-100"
        />
      </article>
      <div>
        <p> Projects include:</p>
        <div>
          {filteredProjects.map((project, i) => (
            <p key={i}>{project.title}</p>
          ))}
        </div>
      </div>
      <div className="border-top-2 border-top-yellow-400 mt-12 border-top-solid">
        <p className="mb-2">
          Interested in {topicData.title} or projects like it? Get in touch with
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
  const paths = getAllTopicIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const topicData = await getTopicData(params.id);
  const postData = await getSortedPostsData();

  const topicTags = topicData.tag.split(',');

  // const filteredProjects = topicTags.filter((tag) =>
  //   postData.filter((post) => post.tag.split(',').includes(tag))
  // );

  const filteredProjects = postData.filter((project) =>
    project.tag.split(',').includes(topicTags[0])
  );

  return {
    props: {
      topicData,
      filteredProjects,
    },
  };
}
