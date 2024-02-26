import { ads } from "@/constants";
import Image from "next/image";
import React from "react";
const RightSidebar = () => {
  return (
    <div className="flex w-[18rem] flex-col gap-10 px-4">
      <p className="my-10 text-4xl font-bold text-white">Sponsor</p>
      {ads.map((ad) => (
        <div className="flex w-full flex-col gap-5" key={ad.name}>
          <Image
            src={ad.imgUrl}
            height={150}
            width={150}
            className="rounded-lg object-cover"
            alt={ad.name}
          />
          <p className="font-semibold text-textColor-100">{ad.name}</p>
          <p className="text-sm italic text-textColor-200">{ad.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default RightSidebar;
