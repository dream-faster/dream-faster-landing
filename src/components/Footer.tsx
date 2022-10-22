import Link from 'next/link';

export const Footer = () => (
  <div className="flex w-full items-start justify-between px-8 font-mono text-sm text-black md:px-6">
    <div>
      <p>Dream Faster AI </p>
      <p className="-mt-1 mb-1 text-xs text-black text-opacity-30">
        UG (haftungsbeschränkt){' '}
      </p>
      <p>🐻 Berlin </p>
    </div>
    <div className="flex flex-row items-end justify-end">
      <Link
        href="https://github.com/applied-exploration/dream-faster-landing"
        className="px-2"
      >
        <a
          className="border-none px-2 text-black hover:text-white"
          href="https://github.com/applied-exploration/dream-faster-landing"
        >
          {' '}
          Code on GitHub{' '}
        </a>
      </Link>
      {/* <GitHub
    url="https://github.com/applied-exploration/dream-faster-landing"
    background_full={true}
  /> */}
    </div>
  </div>
);
