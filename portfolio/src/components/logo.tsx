import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="text-md md:text-xl lg:text-2xl font-extrabold shadow-black text-white font-mplus">
      listwon.dev | <span className=" bg-gradient-to-r from-orange-500 to-amber-500 text-transparent bg-clip-text ">portfolio</span>
    </div>
  );
};

export default Logo;
