import { MajorButton } from './MajorButton';

const userInfo = [
  {
    name: 'Mark Aron Szulyovszky',
    profile: '/assets/images/mark_profile.jpeg',
    urls: [
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/markszulyovszky/',
      },
      {
        name: 'github',
        url: 'https://github.com/itchingpixels',
      },
      {
        name: 'blog',
        url: 'https://almostintuitive.com/',
      },
    ],
  },
  {
    name: 'Daniel Szemerey',
    profile: '/assets/images/dani_profile.jpeg',
    urls: [
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/daniel-szemerey/',
      },
      {
        name: 'github',
        url: 'https://github.com/szemyd/',
      },
      {
        name: 'blog',
        url: 'https://szemerey.eu',
      },
    ],
  },
];

const TinyLink = ({ url, name }: { url: string; name: string }) => (
  <a
    className=" border-none text-yellow-400"
    href={url}
    target="_blank"
    rel="noreferrer"
  >
    {name}
  </a>
);

const ProfilePic = ({
  name,
  profile_url,
  urls,
}: {
  name: string;
  profile_url: string;
  urls: Array<Record<string, string>>;
}) => (
  <div className="m-2 flex max-w-2xl flex-row font-mono text-xs">
    <div className="mr-4 flex items-start justify-start">
      <img
        className="h-10 w-10 rounded border border-solid border-yellow-400"
        src={profile_url}
        alt="Rounded avatar"
      />
    </div>
    <div className="flex flex-col">
      <p className="">{name}</p>

      <div className="flex w-full flex-row">
        {urls.map((url, i) => (
          <div key={i} className="text-gray-500">
            {' '}
            <TinyLink name={url.name} url={url.url} /> |&nbsp;{' '}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const Hero = () => (
  <div className="flex h-full flex-col justify-between md:min-h-[calc(100vh-16rem)]">
    <div className="absolute z-10 ml-[18px] h-5 w-1 bg-black outline-2 outline-white dark:bg-white md:ml-[-2px] " />
    <div className="flex h-full flex-col justify-between">
      <p className=" h-full px-12 font-mono text-sm text-black dark:text-slate-300">
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
      <div className="mt-6 flex h-full flex-col items-start justify-start px-12">
        {userInfo.map((user, i) => (
          <ProfilePic
            key={i}
            name={user.name}
            profile_url={user.profile}
            urls={user.urls}
          />
        ))}
      </div>
    </div>
    <div className="px-12">
      <MajorButton text="Who we are" link="/about" />
      <MajorButton text="Collaborate with us" link="/collaborate" primary />
    </div>
  </div>
);
