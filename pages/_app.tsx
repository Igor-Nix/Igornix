import "@/styles/globals.css"
import type { AppProps } from "next/app"
import Layout from "@/src/layout/Layout"
import "@/styles/style.scss"
import "bootstrap/dist/css/bootstrap-grid.min.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
