const TinyLink = ({ url, name }: { url?: string; name?: string }) => (
  <a
    className="  border-none text-yellow-400 hover:underline"
    href={url}
    target="_blank"
    rel="noreferrer"
  >
    {name}
  </a>
);

export const Avatar = ({ profile_url }: { profile_url: string }) => (
  <div className="mr-3 flex flex-none items-start justify-start shadow-lg">
    <img
      className="h-10 w-10 rounded border border-solid border-yellow-400"
      src={profile_url}
      alt="Rounded avatar"
    />
  </div>
);

export const ProfileCard = ({
  name,
  profile_url,
  urls,
}: {
  name: string;
  profile_url: string;
  urls: Array<Record<string, string>>;
}) => (
  <div className="mb-2 mr-6 flex max-w-2xl flex-row font-mono text-xs">
    <Avatar profile_url={profile_url} />
    <div className="flex flex-col">
      <p className="text-gray-700 dark:text-white">{name}</p>

      <div className="flex w-full flex-row">
        {urls.map((url, i) => (
          <div key={i} className="text-gray-500">
            {i !== 0 && '•'}
            <TinyLink name={url.name} url={url.url} />
          </div>
        ))}
      </div>
    </div>
  </div>
);
