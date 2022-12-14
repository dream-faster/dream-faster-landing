const Background = ({ wide }: { wide: boolean }) =>
  wide ? (
    <div className="pointer-events-none fixed inset-y-0 left-0 grid h-full w-screen grid-cols-1 place-items-center p-5 pt-0 md:grid-cols-8 md:p-0">
      <div className="hidden h-screen w-full border-r border-dashed border-yellow-400 opacity-100 md:block md:border-solid" />
      <div className="hidden h-screen w-full md:block" />
      {/* <div className="hidden h-screen w-full md:block" /> */}
      <div className="h-screen w-full border-x border-solid border-yellow-400 opacity-100 md:col-span-4 md:border-dashed" />
      <div className="hidden h-screen w-full md:block" />
      {/* <div className="hidden h-screen w-full md:block" /> */}
      <div className="hidden h-screen w-full border-l border-dashed border-yellow-400 opacity-100 md:block md:border-solid" />
    </div>
  ) : (
    <div className="pointer-events-none fixed inset-y-0 left-0 grid h-full w-screen grid-cols-1 place-items-center p-5 pt-0 md:grid-cols-6 md:p-0">
      <div className="hidden h-screen w-full border-r border-dashed border-yellow-400 opacity-100 md:block md:border-solid" />
      <div className="hidden h-screen w-full md:block" />
      <div className="h-screen w-full border-x border-solid border-yellow-400 opacity-100 md:col-span-2 md:border-dashed" />
      <div className="hidden h-screen w-full md:block" />
      <div className="hidden h-screen w-full border-l border-dashed border-yellow-400 opacity-100 md:block md:border-solid" />
    </div>
  );
export default Background;
