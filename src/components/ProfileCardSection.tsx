import { ProfileCard } from './ProfileCard';

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
export const ProfileCardSection = () => (
  <div className="mt-6 flex h-full flex-col items-start justify-start px-12 md:flex-row">
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
