import router from 'next/router';

import Breadcrumbs from './Breadcrumb';

const BreadcrumbSection = () => (
  <div className="mb-10 flex w-full flex-row justify-around">
    <button
      onClick={() => router.back()}
      className="flex w-fit items-end justify-start whitespace-nowrap p-0 font-mono text-xs tracking-widest"
    >
      {' '}
      ← BACK
    </button>
    <Breadcrumbs />
  </div>
);

export default BreadcrumbSection;
