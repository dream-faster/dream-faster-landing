import { getAllTopicIds, getTopicData } from '@/lib/topics';

import { getSortedPostsData } from '@/lib/projects';

import { Meta } from '@/layouts/Meta.tsx';
import { Main } from '@/templates/Main.tsx';

import { ProjectPage } from '@/components/ProjectPage.tsx';

export default function Post({ topicData, filteredProjects }) {
  return (
    <Main
      wide={true}
      meta={
        <Meta
          title={`Project: ${topicData.title} - Dream Faster | ML Research`}
          description={topicData.description}
          social_card_ending="topics"
        />
      }
    >
      <ProjectPage
        data={topicData}
        relatedData={filteredProjects}
        relatedType="projects"
      />
      {/* <Article>
        <article className="prose prose-zinc dark:prose-invert w-full ">
          <h3> {topicData.description} </h3>
          <div
            dangerouslySetInnerHTML={{ __html: topicData.contentHtml }}
            className="dark:text-slate-100"
          />
        </article>
      </Article>

      <OneSection title="  ">
        <div className="flex justify-start flex-col items-start w-full px-12">
          <p className="mb-2">
            Interested in {topicData.title} or projects like it?
            <br />
            <b>Get in touch with us:</b>
          </p>
          <div className="-ml-2">
            <MajorButton
              text="Collaborate with us"
              link="/collaborate"
              primary={false}
            />
          </div>
        </div>
      </OneSection>
      <OneSection title="related projects 👇">
        <ProjectsSection allPostsData={filteredProjects} baseUrl="topics" />
      </OneSection>

      <div className="h-14" /> */}
    </Main>
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
