import Head from 'next/head';
import Link from 'next/link';
import { Main } from '@/templates/Main.tsx';
import { Meta } from '@/layouts/Meta.tsx';
import { getSortedPostsData } from '../lib/posts';

export default function Home({ allPostsData }) {
  return (
    <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
      <Head>
        <title>{'Dream Faster Landing'}</title>
      </Head>
      <section>
        <p>[Your Self Introduction]</p>
      </section>
      <section>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Main>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
