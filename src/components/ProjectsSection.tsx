import ProjectButton from '@/components/ProjectButton';

import Plus from './Plus';

const ProjectsSection = ({
  allPostsData,
  baseUrl,
  all,
}: {
  allPostsData: Array<any>;
  baseUrl: string;
  all?: boolean;
}) => (
  <div className="flex w-full flex-col items-center justify-center">
    {allPostsData.map(
      ({ id, github_link, date, title, description, favorite }) =>
        (favorite || all) && (
          <ProjectButton
            key={id}
            title={title}
            subtitle={description}
            date={date}
            url={github_link}
            linkto={`/${baseUrl}/${id}`}
            decorator={<Plus />}
          />
        )
    )}
  </div>
);

export default ProjectsSection;
