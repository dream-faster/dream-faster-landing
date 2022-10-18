import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const convertBreadcrumb = (string) => {
  return string
    .replace(/-/g, ' ')
    .replace(/oe/g, 'ö')
    .replace(/ae/g, 'ä')
    .replace(/ue/g, 'ü')
    .toUpperCase();
};

const Breadcrumbs = () => {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState(null);

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split('/');
      linkPath.shift();

      let pathArray = linkPath.map((path, i) => {
        return {
          breadcrumb: path,
          href: `/${linkPath.slice(0, i + 1).join('/')}`,
        };
      });

      pathArray = pathArray.slice(0, pathArray.length - 1);

      setBreadcrumbs(pathArray);
    }
  }, [router]);

  if (!breadcrumbs) {
    return null;
  }

  return (
    <nav aria-label="breadcrumbs" className="w-full h-fit p-0 m-0">
      <ol className="flex flex-row p-0 m-0 justify-end">
        <li className="list-none text-xs font-mono m-0 text-black">
          <Link href="/">HOME</Link>
        </li>
        {breadcrumbs.map((breadcrumb, i) => {
          return (
            <li
              key={breadcrumb.href}
              className="list-none text-xs font-mono no-underline m-0"
            >
              {i === 0 ? (
                <p className="no-underline border-none m-0 p-0">
                  {`/ ${convertBreadcrumb(breadcrumb.breadcrumb)} `}
                </p>
              ) : (
                <Link href={breadcrumb.href}>
                  <a
                    className={`no-underline border-none ${
                      i === 1 ? 'text-yellow-400' : 'text-black'
                    }`}
                  >{` / ${convertBreadcrumb(breadcrumb.breadcrumb)} `}</a>
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
