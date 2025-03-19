import React from "react";

export default function UserHistorySection({ image, ...props }) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center justify-end md:w-[50%] w-full`}
    >
      <img src={image} alt="userhistory" className="w-full h-full object-cover"/>
    </div>
  );
}