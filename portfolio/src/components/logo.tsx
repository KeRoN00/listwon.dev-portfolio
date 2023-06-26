import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="text-xl lg:text-2xl font-extrabold shadow-black text-white font-mplus cursor-default select-none">
      listwon.dev | <span className=" bg-gradient-to-r from-green-500 to-cyan-500 text-transparent bg-clip-text ">portfolio</span>
    </div>
  );
};

export default Logo;
