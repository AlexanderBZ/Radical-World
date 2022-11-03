import Link from "components/base/Link";
import Header from "components/Header";
import { SendIcon } from "components/Icons";
import PagePadding from "components/PagePadding";
import Image from "next/image";
import { useState } from "react";

export default function Footer() {
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

  const company = [
    { name: "About us", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact us", path: "/contact" },
    { name: "Pricing", path: "/pricing" },
    { name: "Testimonials", path: "/testimonials" },
  ];
  const support = [
    { name: "Help center", path: "/help" },
    { name: "Terms of service", path: "/terms" },
    { name: "Legal", path: "/legal" },
    { name: "Privacy policy", path: "/privacy" },
    { name: "Status", path: "/status" },
  ];
  return (
    <>
      <div className="matrix"></div>
      <div className="bg-dark w-full pt-10">
        <PagePadding className="gap-10">
          <div className="flex flex-col gap-20 lg:flex-row">
            <div className="flex-1 space-y-4 min-w-[300px]">
              <Image
                width={160}
                height={168}
                alt="LOGO"
                className="w-14"
                src="/assets/images/logo.svg"
              />
              <h6 className="text-gray-300">Live on the edge</h6>
            </div>
            <div className="flex-2 flex flex-wrap gap-20 ">
              <div className="flex-1  space-y-8">
                <Header className="text-2xl">Company</Header>
                <ul className="space-y-4">
                  {company.map((link) => (
                    <li
                      key={link.path}
                      className="text-gray-400 hover:text-primary transition-all"
                    >
                      <Link href={link.path}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 space-y-8">
                <Header className="text-2xl">Support</Header>
                <ul className="space-y-4 ">
                  {support.map((link) => (
                    <li
                      key={link.path}
                      className="text-gray-400 hover:text-primary transition-all"
                    >
                      <Link href={link.path}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 space-y-8">
                <Header className="text-2xl">Stay up to date</Header>
                <form
                  onSubmit={handleSubmit}
                  className="bg-[#545454] rounded-full w-full min-w-[230px]   max-w-full flex items-center p-4 px-6"
                >
                  <input
                    className="flex-1 focus:border-none focus:outline-none  text-white bg-transparent placeholder:text-[#C8C8C8] "
                    placeholder="Your email address"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                  <button type="submit" className="text-[#C8C8C8]">
                    <SendIcon />
                  </button>
                </form>
              </div>
            </div>
          </div>
          <p className="py-8 mt-20 text-gray-200 text-center">
            © 2022 Wave. All rights reserved.
          </p>
        </PagePadding>
      </div>
    </>
  );
}
