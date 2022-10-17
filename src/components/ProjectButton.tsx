import { useRouter } from 'next/router';

import GitHub from './GitHub';
import Plus from './Plus';

const ProjectButton = ({
  title,
  subtitle,
  url,
  linkto,
}: {
  title: string;
  subtitle: string;
  url: string;
  linkto: string;
}) => {
  const router = useRouter();

  return (
    <div className="group my-2 mb-8 flex w-[calc(100%+24px)] flex-row items-center justify-between p-5 md:p-0">
      <a
        href={linkto}
        className="  flex w-full items-start justify-center hover:border-none "
      >
        <Plus />
        <div className="m-0 flex h-full w-full flex-col justify-center px-2">
          <div className="flex h-full items-start py-1  group-hover:bg-yellow-400">
            <h1 className=" flex h-[calc(1rem+1px)] w-full items-center pl-4 align-middle font-mono text-[calc(1rem+1px)] font-bold text-black ">
              {' '}
              {title}
            </h1>
          </div>
          <h2 className="mt-2 pl-4 font-mono text-sm text-gray-700">
            {' '}
            {subtitle}{' '}
          </h2>
        </div>
      </a>
      <GitHub
        url={url}
        imgSource={`${router.basePath}/assets/images/github.svg`}
      />
    </div>
  );
};

export default ProjectButton;
