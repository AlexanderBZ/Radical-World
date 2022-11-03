import Button from "components/base/Button";
import Header from "components/Header";
import Image from "next/image";
import React from "react";

export default function NotableDropCard({
  creator,
  price,
  title,
  imageUrl = "/assets/images/ryan-loughlin-HXqpJnLyHzg-unsplash.jpg",
  ...rest
}) {
  return (
    <div className="w-full" {...rest}>
      <div className="w-full bg-dark overflow-hidden rounded-3xl">
        <Image
          width={220}
          height={260}
          className="w-full h-[340px] object-cover"
          src={imageUrl}
        />
        <div className="p-4">
          <Header className="text-3xl">{title}</Header>
          <div className="flex gap-4 mt-2">
            <h6 className="text-white">Creator</h6>
            <span className="text-primary">{creator}</span>
          </div>
          <div className="flex items-center gap-4 mt-6 mb-4">
            <h6 className="text-gray-400">Price</h6>
            <div className="text-primary flex gap-1 items-center">
              <span>${price}</span>
            </div>
          </div>
          <Button>Visit</Button>
        </div>
      </div>
    </div>
  );
}
