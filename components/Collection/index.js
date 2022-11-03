import Header from "components/Header";
import { PlayIcon } from "components/Icons";
import PagePadding from "components/PagePadding";
import Image from "next/image";
import React from "react";
import CollectionCard from "./CollectionCard";

export default function Collection() {
  return (
    <div>
      <div className="bg-dark py-20 ">
        <PagePadding>
          <Header data-aos="fade-down" className="text-center">
            Start your collection Today
          </Header>
          <div className="grid-d gap-8 mt-8">
            <CollectionCard
              data-aos="fade-up"
              data-aos-delay="100"
              title="Own a part of history"
            >
              You can own video highlights of some of the most extreme atheletic
              feats ever!
            </CollectionCard>
            <CollectionCard
              data-aos="fade-up"
              data-aos-delay="200"
              title="Enter raffles"
            >
              Chances to win merch and gear from your favorite athletes with
              RadicalWorld NFT’s
            </CollectionCard>
            <CollectionCard
              data-aos="fade-up"
              data-aos-delay="300"
              title="Competitions"
            >
              Special Radical World challenges that give you a chance to get up
              close to the action
            </CollectionCard>
            <CollectionCard
              data-aos="fade-up"
              data-aos-delay="400"
              title="Trading"
            >
              Buy and sell in seconds with protected transactions, verified
              collectors, and guaranteed authenticity
            </CollectionCard>
          </div>

          <div className="mt-20 flex flex-col items-center space-y-8">
            <Header
              data-aos="fade-up"
              className="text-center max-w-3xl capitalize"
            >
              It’s a radical world out there. you should be apart of it
            </Header>

            <div
              data-aos="fade-up"
              className="w-full max-w-3xl h-72 relative overflow-hidden rounded-3xl bg-primary"
            >
              <Image
                src="/assets/images/victoria-palacios.jpg"
                className="w-full h-full object-cover"
                width={1024}
                height={400}
              />
              {/* <button className="w-16 h-16 text-white absolute text-4xl pl-2 top-1/2 left-1/2 flex justify-center items-center rounded-full bg-black/50 transform -translate-x-1/2 -translate-y-1/2">
                <PlayIcon />
              </button> */}
            </div>
          </div>
        </PagePadding>
      </div>
      <div className="matrix-down" />
    </div>
  );
}
