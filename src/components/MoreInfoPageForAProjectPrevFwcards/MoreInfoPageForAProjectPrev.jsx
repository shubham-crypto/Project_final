import { Img } from "..";
import React from "react";

export default function MoreInfoPageForAProjectPrevFwcards({ src, alt, ...props }) {
  return (
    <div {...props} className={`${props.className} flex items-center w-full rounded-[60px]`}>
      <Img
        src={src}
        alt={alt}
        className="h-[220px] w-full rounded-[60px] object-cover"
      />
    </div>
  );
}