import Button from "components/base/Button";
import Header from "components/Header";
import NavBar from "components/Layout/NavBar";
import PagePadding from "components/PagePadding";
import Text from "components/Text";
import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <div className="bg-dark min-h-screen h-max">
      <NavBar />
      <PagePadding className="min-h-screen h-full w-full pt-28 pb-8 flex-col lg:flex-row flex justify-center items-center gap-10">
        <div className="text-center lg:text-left flex-1 space-y-8 w-[500px] max-w-full">
          <Header data-aos="fade-up" variant="light" className="lg:text-7xl">
            Live in a radical world.
          </Header>
          <Text
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-banner-text-color"
          >
            Collect and own licensed moments from radical atheletes that allow
            you to enter raffles & competitions to win big.
          </Text>
          <Button data-aos="fade-up" data-aos-delay="200" className="md:w-max">
            Explore
          </Button>

          <div className="flex pt-10 divide-x justify-center lg:justify-start divide-gray-600">
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="space-y-2 mr-8 flex flex-col items-center"
            >
              <h4 className="text-primary text-2xl lg:text-5xl font-display">
                30K
              </h4>
              <h6 className="text-white">Artwork</h6>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="600"
              className="space-y-2 pl-8 mr-8 flex flex-col items-center"
            >
              <h4 className="text-primary text-2xl lg:text-5xl font-display">
                26K
              </h4>
              <h6 className="text-white">Auction</h6>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="800"
              className="space-y-2 flex pl-8  flex-col items-center"
            >
              <h4 className="text-primary text-2xl lg:text-5xl font-display">
                19K
              </h4>
              <h6 className="text-white">Artist</h6>
            </div>
          </div>
        </div>

        <div className="flex-1 h-full flex items-center justify-center lg:justify-end px-4">
          <Image
            src="/assets/images/jeremy-bishop.jpg"
            className="w-full lg:w-[454.32px] lg:h-[567px] rounded-xl object-cover"
            width={640}
            height={427}
            alt="Banner Image"
          />
        </div>
      </PagePadding>
    </div>
  );
}
