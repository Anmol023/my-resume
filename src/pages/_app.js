import "@/styles/globals.css";
import Head from "next/head";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Anmol Gupta</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"></meta>
      </Head>
      <Component {...pageProps} />
      <Analytics/>
      <SpeedInsights/>
    </>
  )
}
