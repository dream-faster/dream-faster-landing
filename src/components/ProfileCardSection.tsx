import Link from 'next/link';

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
    name: 'Charles Fried',
    profile: '/assets/images/charles_fried_profile.jpg',
    intro:
      'Charles is currently building [Unsigned Research](https://unsigned-research.com/) with a simple goal to provide sustained and superior risk-adjusted returns, irrespective of the overall market direction, via systematic strategies.',
    urls: [
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/charles-fried',
      },
      {
        name: 'twitter',
        url: 'https://twitter.com/iSeekLong',
      },
      {
        name: 'website',
        url: 'https://www.charlesfried.com/',
      },
    ],
  },
  {
    name: 'Zoltan C. Toth',
    profile: '/assets/images/zoltan_toth_profile.jpeg',
    urls: [
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/zoltanctoth/',
      },
      {
        name: 'github',
        url: 'https://github.com/zoltanctoth',
      },
      // {
      //   name: 'blog',
      //   url: 'https://almostintuitive.com/',
      // },
    ],
  },
  {
    name: 'Felix van Litsenburg',
    profile: '/assets/images/felix_vanLitsenburg_profile.jpeg',
    urls: [
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/fvanlitsenburg/',
      },
      {
        name: 'website',
        url: 'https://www.wetzoek.nl',
      },
    ],
  },
  {
    name: 'Peter Kadlot',
    profile: '/assets/images/peter_kadlot_profile.jpeg',
    urls: [
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/peterkadlot/',
      },
      // {
      //   name: 'github',
      //   url: 'https://github.com/daralthus',
      // },
      {
        name: 'twitter',
        url: 'https://www.twitter.com/bonsaielectric/',
      },
    ],
  },
  {
    name: 'Ricardo Ferretti',
    profile: '/assets/images/ricardo_ferretti_profile.jpeg',
    urls: [
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/riccardoferretti/',
      },
      {
        name: 'github',
        url: 'https://github.com/riccardoferretti',
      },
    ],
  },
  {
    name: 'Check out all',
    profile: '/assets/images/placeholder_profile.svg',
    more: true,
    urls: [],
    //   {
    //     name: 'linkedin',
    //     url: 'https://www.linkedin.com/in/markszulyovszky/',
    //   },
    //   {
    //     name: 'github',
    //     url: 'https://github.com/itchingpixels',
    //   },
    //   {
    //     name: 'blog',
    //     url: 'https://almostintuitive.com/',
    //   },
    // ],
  },
];

export const ProfileCardSection = ({ large }: { large?: boolean }) => (
  <div
    className={` flex h-full w-full flex-col flex-wrap items-start  ${
      large ? 'justify-between' : 'justify-start'
    } md:flex-row`}
  >
    {userInfo.map((user, i) => (
      <ProfileCard
        key={i}
        name={user.name}
        profile_url={user.profile}
        urls={user.urls}
        large={large}
      />
    ))}
  </div>
);
export const CommunityCardSection = ({ large }: { large?: boolean }) => (
  <div
    className={` flex h-full w-full flex-col flex-wrap items-start  ${
      large ? 'justify-between' : 'justify-start'
    } md:flex-row`}
  >
    {communityInfo.map(
      (user, i) =>
        !user.more && (
          <ProfileCard
            key={i}
            name={user.name}
            profile_url={user.profile}
            urls={user.urls}
            large={large}
          />
        )
    )}
  </div>
);

export const CommunityAvatarSection = () => (
  <div className="flex h-full flex-row items-start justify-start">
    {communityInfo.map(
      (user, i) =>
        (i < 3 || user.more) && (
          <Link
            href={`${i + 1 === communityInfo.length ? '/about#community' : ''}`}
            key={i}
            className={`group z-0 m-0 flex-none  hover:z-30 ${
              i === 0 ? 'ml-0' : '-ml-7'
            } ${
              i + 1 === communityInfo.length
                ? 'cursor-pointer'
                : 'cursor-default'
            }`}
          >
            <div
              className={`group z-0 m-0 flex-none  hover:z-30 ${
                i === 0 ? 'ml-0' : '-ml-7'
              } ${
                i + 1 === communityInfo.length
                  ? 'cursor-pointer'
                  : 'cursor-default'
              }`}
            >
              <Avatar key={i} profile_url={user.profile} />
              <p className="absolute hidden bg-white font-mono text-xs group-hover:block">
                {user.name}
              </p>
            </div>
          </Link>
        )
    )}
    <p className="flex h-full items-center justify-center self-center pr-2 text-center font-mono text-xs text-gray-700 dark:text-white">
      Community
    </p>
  </div>
);
