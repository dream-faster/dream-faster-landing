import Link from 'next/link';

export const MinorButton = ({ text, to }: { text: string; to: string }) => (
  <Link href={to}>
    <a className=" m-2 mx-12 self-start justify-self-start border-none font-mono text-sm text-black no-underline hover:border-b-2 hover:border-b-yellow-400 hover:text-yellow-400">
      {text} ➡
    </a>
  </Link>
);
