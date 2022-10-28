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
