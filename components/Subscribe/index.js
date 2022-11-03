import Button from "components/base/Button";
import Header from "components/Header";
import PagePadding from "components/PagePadding";
import Text from "components/Text";
import Image from "next/image";
import { useState } from "react";

export default function Subscribe() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    submitUser();
  };

  //Handle Login API Integration here
  const submitUser = () => {
    let airtableFields = {
      email: email,
    };

    fetch("/api/submitPod", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(airtableFields),
    })
      .then((response) => response.json())
      .then((data) => {})
      .catch((error) => console.log(error));

    setEmail("");
  };
  return (
    <PagePadding className="flex gap-10  py-28 items-center flex-col lg:flex-row">
      <div className="lg:flex-1">
        <Image
          width={1024}
          height={400}
          data-aos="fade-up"
          className="h-80   object-cover rounded-3xl"
          alt="Subscripe"
          src="/assets/images/sky-diving.jpg"
        />
      </div>
      <div
        data-aos="fade-up"
        className="flex-1 space-y-10 flex items-center text-center md:text-left md:items-start flex-col"
      >
        <div className="space-y-4">
          <Header variant="dark">
            Never miss <br /> a drop
          </Header>
          <Text>Subscribe to stay ahead of the curve.</Text>
        </div>
        <div className="">
          <form
            onSubmit={handleSubmit}
            className="flex w-full border border-[#545454] p-1 overflow-hidden pl-4 rounded-full"
          >
            <input
              className="w-full focus:border-none focus:outline-none "
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <Button type="submit" className="w-max py-2.5">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </PagePadding>
  );
}
