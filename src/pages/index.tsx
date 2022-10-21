import { Footer } from '@/components/Footer';
import ProjectsSection from '@/components/ProjectsSection';
import { Meta } from '@/layouts/Meta';
import { getSortedPostsData } from '@/lib/projects';
import { Main } from '@/templates/Main';
import OneSection from '@/templates/OneSection';

export default function Index({
  allPostsData,
}: {
  allPostsData: [string, string, string, string];
}): JSX.Element {
  // const router = useRouter();

  return (
    <Main
      wide={true}
      meta={
        <Meta
          title="Dream Faster AI Studio"
          description="Independent R&D studio specialized in Artificial Intelligence."
        />
      }
    >
      <OneSection>
        <p className="min-h-[50vh] px-12 font-mono text-sm text-black">
          We are an independent Machine Learning Research and Development Studio
          based in Berlin.
          <br />
          <br />
          We love to:
          <br />
          &emsp;- make state of the art algorithms more convenient to access
          <br />
          &emsp;- explore if ML practices hold up to scrutiny
          <br />
          &emsp;- work with experts to develop useful tools and solutions to
          real-world problems
        </p>
      </OneSection>
      <OneSection title="projects">
        <ProjectsSection allPostsData={allPostsData} />
      </OneSection>
      <div className="h-28" />
      <OneSection background_full={true}>
        <Footer />
      </OneSection>
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
