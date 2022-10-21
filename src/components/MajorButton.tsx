import Link from 'next/link';

export const MajorButton = ({
  text,
  link,
  primary,
}: {
  text: string;
  link: string;
  primary: boolean;
}) => (
  <Link href={link}>
    <button
      className={`mx-2 h-[calc(1rem+9px)]  w-fit border border-yellow-400 px-4 text-right text-black hover:bg-yellow-400 md:mr-0 ${
        primary ? 'bg-yellow-400' : 'bg-transparent'
      }`}
    >
      {' '}
      {text} ⟶
    </button>
  </Link>
);
