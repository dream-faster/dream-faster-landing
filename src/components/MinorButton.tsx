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
    className={`mx-0 h-[calc(1rem+15px)] w-fit border  px-3 py-1 text-right font-mono text-black no-underline  group-hover:border-yellow-400 group-hover:bg-yellow-400 group-hover:shadow-md dark:text-slate-300  ${
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
  type_,
  solo,
}: {
  text: string;
  link: string;
  primary?: boolean;
  external?: boolean;
  type_?: any;
  solo?: any;
}) =>
  external || type_ ? (
    <button
      type={type_ || 'button'}
      className={`group m-2 ${
        solo ? 'ml-0' : 'ml-2'
      } h-fit min-h-[calc(1rem+9px)] min-w-fit py-1 shadow-none outline-none`}
    >
      <Box primary={primary} text={text} external_link={type_ ? '' : link} />
    </button>
  ) : (
    <Link href={link}>
      <button className="group m-2 h-fit min-h-[calc(1rem+9px)] py-1 shadow-none outline-none ">
        <Box primary={primary} text={text} />
      </button>
    </Link>
  );

// ⟶
