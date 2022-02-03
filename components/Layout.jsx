import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import CloseBtn from "./CloseBtn";
import Footer from "./Footer";
import Header from "./Header";
import LinkButton from "./LinkButton";

export default function Layout({ children, pageTitle }) {
  const [isOpen, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!isOpen);
  };
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>

      <Header onClickFunction={handleClick} />
      <nav
        style={{
          width: isOpen ? "100%" : 0,
        }}
        className="h-full fixed bg-knicksBlue flex flex-col gap-40"
      >
        <span
          style={{
            display: isOpen ? "flex" : "none",
          }}
          className="w-full h-14 px-8 flex flex-row justify-end items-center text-white overflow-hidden"
        >
          <button onClick={handleClick}>
            <CloseBtn />
          </button>
        </span>
        <div
          className="flex flex-col items-center"
          style={{
            display: isOpen ? "flex" : "none",
          }}
        >
          <Link passHref href="/Movies">
            <span className="my-4 text-center text-knicksSilver text-3xl font-extrabold w-4/5 hover:text-knicksOrange hover:border-2 hover:border-knicksOrange rounded-xl py-1 duration-200">
              MOVIES
            </span>
          </Link>
          <Link passHref href="/Series">
            <span className="my-4 text-center text-knicksSilver text-3xl font-extrabold w-4/5 hover:text-knicksOrange hover:border-2 hover:border-knicksOrange rounded-xl py-1 duration-200">
              SERIES
            </span>
          </Link>
        </div>
      </nav>
      <main className="max-h-full min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
