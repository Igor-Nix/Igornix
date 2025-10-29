import type { Metadata } from "next"
import Head from "next/head"
import favicon from "../../public/favicon.ico"
import Navbar from "../components/Navbar/Navbar"

export const metadata: Metadata = {
  title: "Igor Nix",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const title = metadata.title || "Igor Nix W"

  return (
    <>
      <Head>
        <title>{title as string}</title>
        <link rel="icon" href={favicon.src} />
      </Head>
      <div className="appContainer">{children}</div>
      <Navbar />
    </>
  )
}
