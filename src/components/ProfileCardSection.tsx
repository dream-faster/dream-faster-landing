import { Avatar, ProfileCard } from './ProfileCard';

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
    profile: '/assets/images/dani_profile.png',
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

const communityInfo = [
  {
    name: 'Joe Doe',
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
    name: 'Joe Doe',
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
    name: 'Joe Doe',
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
];

export const ProfileCardSection = () => (
  <div className=" flex h-full flex-col flex-wrap items-start justify-start  md:flex-row">
    {userInfo.map((user, i) => (
      <ProfileCard
        key={i}
        name={user.name}
        profile_url={user.profile}
        urls={user.urls}
      />
    ))}
  </div>
);

export const CommunityCardSection = () => (
  <div className="flex h-full flex-row items-start justify-start">
    {communityInfo.map((user, i) => (
      <a
        target="_blank"
        href={user.urls[0].url}
        key={i}
        className={`group z-0 m-0 flex-none  hover:z-30 ${
          i === 0 ? 'ml-0' : '-ml-7'
        }`}
        rel="noreferrer"
      >
        <Avatar key={i} profile_url={user.profile} />
        <p className="absolute hidden bg-white font-mono text-xs group-hover:block">
          {user.name}
        </p>
      </a>
    ))}
    <p className="flex h-full items-center justify-center self-center pr-2 text-center font-mono text-xs text-gray-700 dark:text-white">
      Community
    </p>
  </div>
);
