import Link from "next/link";
import React from "react";

const notFound = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <div className="errorImageDiv">
            <img className="errorImage" src="/images/errorPageImg.jpg" alt="" />
        </div>
        <div className="py-10 text-center">
          <Link href="/">
            <button className="border border-rose-500 px-5 py-1 rounded-xl cursor-pointer text-[#ED5827]">Go Back Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default notFound;