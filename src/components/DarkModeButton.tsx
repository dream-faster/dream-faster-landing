import React from 'react';

export const ToggleButton = () => {
  function toggleSwitch() {
    document.documentElement.classList.toggle('dark');
    // localStorage.theme = 'light';
  }
  // useEffect(() => {
  //   if (
  //     localStorage.theme === 'dark' ||
  //     (!('theme' in localStorage) &&
  //       window.matchMedia('(prefers-color-scheme: dark)').matches)
  //   ) {
  //     document.documentElement.classList.add('dark');
  //   } else {
  //     document.documentElement.classList.remove('dark');
  //   }
  // });

  return (
    <div className="flex flex-row items-center justify-center justify-self-center">
      ☀️
      <button
        title="Toggle Theme"
        onClick={() => toggleSwitch()}
        className="
          relative
          mx-2
          h-[calc(1rem+9px)] 
          w-12
          justify-self-center 
          bg-gray-400 
          p-1
          transition-colors 
          duration-500 
          ease-in 
          focus:border-transparent
          focus:outline-none 
          focus:ring-2 
          focus:ring-yellow-400 
          dark:bg-gray-600 
          dark:focus:ring-yellow-400
        "
      >
        <div
          id="toggle"
          className="
              pointer-events-none 
              relative 
              ml-0 
              h-4 
              w-4 
           
              bg-white
              transition-all 
              duration-300 
              ease-out 
              dark:ml-6 
              dark:bg-slate-800
          "
        />
      </button>
      🌖
    </div>
  );
};
