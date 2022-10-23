import ProjectButton from '@/components/ProjectButton';

const ProjectsSection = ({
  allPostsData,
  baseUrl,
}: {
  allPostsData: Array<any>;
  baseUrl: string;
}) => (
  <div className="flex w-full flex-col items-center justify-center">
    {allPostsData.map(({ id, github_link, date, title, description }) => (
      <ProjectButton
        key={id}
        title={title}
        subtitle={description}
        date={date}
        url={github_link}
        linkto={`/${baseUrl}/${id}`}
      />
    ))}
  </div>
);

export default ProjectsSection;
