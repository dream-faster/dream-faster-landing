const IconWrapper = ({ children }) => (
  <div className="z-10 m-0 flex flex-none flex-col justify-center bg-white p-1 group-hover:bg-yellow-400 dark:bg-slate-900">
    <div className="m-0 h-[calc(1rem+1px)] w-[calc(1rem+1px)] flex-none p-0">
      {children}
    </div>
  </div>
);

export default IconWrapper;
