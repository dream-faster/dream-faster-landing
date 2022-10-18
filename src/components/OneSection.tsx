import ProjectButton from '@/components/ProjectButton';

const OneSection = ({ allPostsData }: { allPostsData: Array<any> }) => (
  // <div className="flex h-full w-screen flex-col justify-center md:w-2/6">

  <div className="flex h-full flex-col items-center justify-start bg-neutral-100 py-8">
    <p className="flex w-full justify-start pl-9 font-mono text-xs tracking-widest md:w-2/6">
      {' '}
      PROJECTS{' '}
    </p>
    <div className="flex w-full flex-col items-center justify-center md:w-2/6">
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
  </div>
  // </div>
);

export default OneSection;
