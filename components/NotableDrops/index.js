import Header from "components/Header";
import PagePadding from "components/PagePadding";
import React from "react";
import NotableDropCard from "./NotableDropCard";

export default function NotableDrops() {
  return (
    <PagePadding className="py-20">
      <Header data-aos="fade-down" variant="dark" className="text-center mb-7">
        Notable Drops
      </Header>
      <div className="grid-c gap-10">
        <NotableDropCard
          title="Apolo"
          price="10.00"
          data-aos="fade-up"
          data-aos-delay="100"
          creator="@burhan"
          imageUrl="/assets/images/jeremy-bishop.jpg"
        />
        <NotableDropCard
          title="Veens"
          price="15.00"
          creator="@angel"
          data-aos="fade-up"
          data-aos-delay="200"
          imageUrl="/assets/images/victoria-palacios.jpg"
        />
        <NotableDropCard
          title="Apolo"
          price="7.50"
          creator="@Alfinas"
          data-aos="fade-up"
          data-aos-delay="300"
          imageUrl="/assets/images/ryan-loughlin.jpg"
        />
      </div>
    </PagePadding>
  );
}
