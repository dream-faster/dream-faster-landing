import { MajorButton } from '@/components/MajorButton';
import { Article } from '@/templates/Article';
import OneSection from '@/templates/OneSection';

import ProjectsSection from './ProjectsSection';

export const ProjectPage = ({ data, relatedData, relatedType }) => (
  <div className="w-full">
    <Article>
      <article className="prose prose-zinc w-full dark:prose-invert ">
        <h3> {data.description} </h3>
        <div
          dangerouslySetInnerHTML={{ __html: data.contentHtml }}
          className="dark:text-slate-100"
        />
      </article>
    </Article>

    <OneSection title="  ">
      <div className="flex w-full flex-col items-start justify-start px-12">
        <p className="mb-2">
          Interested in {data.title} or projects like it?
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
    {relatedData.length > 0 && (
      <OneSection title={`related ${relatedType} 👇`}>
        <ProjectsSection allPostsData={relatedData} baseUrl={relatedType} />
      </OneSection>
    )}
    <div className="h-14" />
  </div>
);
