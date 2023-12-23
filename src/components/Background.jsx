// eslint-disable-next-line no-unused-vars
import React from "react";

function Background() {
  return (
    <>
    <div className=" w-full h-screen fixed z-[2]">
      <div className="text-xl flex justify-center text-zinc-600 py-8 w-full absolute top-[4%]">
        Documents
      </div>
      <h1 className="text-[13vh] leading-none tracking-lighter absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold text-zinc-900">
        DOCS.
      </h1>
    </div>
    </>
  );
}

export default Background;
