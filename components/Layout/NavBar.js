import Link from "components/base/Link";
import { CloseIcon, MenuIcon } from "components/Icons";
import PagePadding from "components/PagePadding";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { fadeIn } from "animation";
import { Fragment, useState, useEffect } from "react";
import "../../flow/config";
import { truncateAddress } from "../../utils/strings";
import * as fcl from "@onflow/fcl";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState();
  const toggleOpen = () => setOpen(!open);

  useEffect(() => {
    fcl.currentUser.subscribe(setUser);
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "Explore", path: "/explore" },
    { name: "Stats", path: "/stats" },
    { name: "Resource", path: "/resource" },
    { name: "Create", path: "/create" },
  ];

  return (
    <PagePadding className="flex justify-between absolute inset-0 items-center h-20">
      <div>
        <Image
          width={160}
          height={168}
          alt="LOGO"
          className="w-14"
          src="/assets/images/logo.svg"
        />
      </div>
      <ul className="lg:flex hidden gap-10 items-center">
        {links.map((link) => (
          <li
            key={link.path}
            className="text-white hover:text-primary transition-all"
          >
            <Link href={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>

      <div className="bg-primary cursor-pointer lg:flex items-center p-1 px-4 text-white gap-4 rounded-full hidden">
        {user ? (
          <span>{truncateAddress(user.addr)}</span>
        ) : (
          <span onClick={fcl.logIn}>Connect Wallet</span>
        )}
      </div>

      <button onClick={toggleOpen} className="text-2xl lg:hidden text-white">
        <MenuIcon />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={fadeIn}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-screen h-screen z-50 bg-dark fixed lg:hidden inset-0"
          >
            <PagePadding className="flex justify-between h-20 items-center">
              <div>
                <Image
                  width={160}
                  height={168}
                  className="w-14"
                  src="/assets/images/logo.png"
                />
              </div>
              <button onClick={toggleOpen} className="text-2xl text-white">
                <CloseIcon />
              </button>
            </PagePadding>
            <PagePadding>
              <ul className="mt-10 space-y-4">
                {links.map((link) => (
                  <li
                    key={link.path}
                    className="text-white hover:text-primary transition-all"
                  >
                    <Link href={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </PagePadding>
          </motion.div>
        )}
      </AnimatePresence>
    </PagePadding>
  );
}
