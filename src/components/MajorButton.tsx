import Link from 'next/link';

export const MajorButton = ({
  text,
  link,
  primary,
}: {
  text: string;
  link: string;
  primary?: boolean;
}) => (
  <Link href={link}>
    <button
      className={`mx-2 my-1 h-[calc(1rem+9px)] w-fit border border-yellow-400 px-4 text-right font-mono text-black hover:bg-yellow-400 md:mr-0 ${
        primary ? 'bg-yellow-400' : 'bg-transparent'
      }`}
    >
      {' '}
      {text} ⟶
    </button>
  </Link>
);
