import Link from 'next/link';

const Box = ({
  text,
  primary,
  sibling,
  external_link,
}: {
  text: string;
  primary?: boolean;
  sibling?: boolean;
  external_link?: string;
}) => (
  <a
    href={external_link || ''}
    className={`mx-0 h-[calc(1rem+15px)]  w-fit border border-yellow-400 px-3 py-1 text-right font-mono text-black hover:border hover:border-yellow-400 group-hover:border-yellow-400 group-hover:bg-yellow-400 group-hover:shadow-md dark:text-slate-300 md:mr-0 ${
      primary ? 'bg-yellow-400' : 'bg-transparent'
    } ${primary ? 'group-hover:text-white' : 'group-hover:text-black'} ${
      sibling ? 'ml-[-1px]' : 'ml-0'
    } ${primary ? 'dark:text-slate-800' : 'dark:text-slate-300'}`}
    rel={`${external_link ? 'noopener noreferrer' : 'noreferrer'}`}
    target={`${external_link ? '_blank' : '_self'}`}
  >
    {text}
  </a>
);

export const MajorButton = ({
  text,
  link,
  primary,
  external,
}: {
  text: string;
  link: string;
  primary?: boolean;
  external?: boolean;
}) =>
  external ? (
    <button className="group mx-2 min-h-[calc(1rem+9px)] shadow-none outline-none ">
      <Box primary={primary} text={text} external_link={link} />
      <Box primary={primary} text={'➡'} sibling external_link={link} />
    </button>
  ) : (
    <Link href={link}>
      <button className="group mx-2 min-h-[calc(1rem+9px)] shadow-none outline-none ">
        <Box primary={primary} text={text} />
        <Box primary={primary} text={'➡'} sibling />
      </button>
    </Link>
  );

// ⟶
