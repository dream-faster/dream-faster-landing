import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

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
    <nav aria-label="breadcrumbs" className="m-0 ml-6 h-fit w-full p-0">
      <ol className="m-0 flex flex-row justify-end p-0">
        <li className="m-0 list-none font-mono text-xs  text-gray-600">
          <Link href="/" className="font-mono text-xs  text-gray-600">
            <a className="text-ellipsis whitespace-nowrap  border-none text-gray-600 no-underline">
              HOME
            </a>
          </Link>
        </li>
        {breadcrumbs.map((breadcrumb, i) => {
          return (
            <li
              key={breadcrumb.href}
              className="m-0 list-none font-mono text-xs no-underline"
            >
              <Link href={breadcrumb.href}>
                <a
                  className={`text-ellipsis whitespace-nowrap  border-none no-underline ${
                    i === breadcrumbs.length - 1
                      ? 'text-yellow-400'
                      : 'text-gray-600'
                  }`}
                >{` / ${convertBreadcrumb(breadcrumb.breadcrumb)} `}</a>
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
