import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="text-xl lg:text-2xl font-extrabold shadow-black text-slate-900 dark:text-white transition-all duration-300 font-mplus cursor-default select-none">
      listwon.dev | <span className=" bg-gradient-to-r from-blue-900 to-purple-900 dark:from-green-500 dark:to-cyan-500 transition-all duration-500 text-transparent bg-clip-text ">portfolio</span>
    </div>
  );
};

export default Logo;
