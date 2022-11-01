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

export const Avatar = ({
  profile_url,
  large,
}: {
  profile_url: string;
  large?: boolean;
}) => (
  <div className="my-0 mr-3 flex flex-none items-start justify-start ">
    <img
      className={`my-0 ${
        large ? 'h-20 w-20' : 'h-10 w-10'
      } rounded border border-solid border-yellow-400 shadow-lg`}
      src={profile_url}
      alt="Rounded avatar"
    />
  </div>
);

export const ProfileCard = ({
  name,
  profile_url,
  urls,
  large,
}: {
  name: string;
  profile_url: string;
  urls: Array<Record<string, string>>;
  large?: boolean;
}) => (
  <div
    className={`mb-2 mr-6 flex max-w-2xl flex-row font-mono ${
      large ? 'text-sm' : 'text-xs'
    }`}
  >
    <Avatar profile_url={profile_url} large={large} />
    <div className="flex flex-col">
      <p className="my-0 text-gray-700 dark:text-white">{name}</p>
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
