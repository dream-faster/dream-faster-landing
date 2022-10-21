import ProjectButton from '@/components/ProjectButton';

const ProjectsSection = ({ allPostsData }: { allPostsData: Array<any> }) => (
  <div className="flex w-full flex-col items-center justify-center">
    {allPostsData.map(({ id, date, title, description }) => (
      <ProjectButton
        key={id}
        title={title}
        subtitle={description}
        date={date}
        url="https://github.com/applied-exploration/modular-pipelines"
        linkto={`/projects/${id}`}
      />
    ))}
  </div>
);

export default ProjectsSection;
