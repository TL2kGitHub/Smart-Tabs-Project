import Gauge from "../components/Gauge";
import Head from "next/head";
import Footer from "../components/Footer";

export default function GaugePage() {
  return (
    <>
      <Head>
        <title>Smart Tabs - Total Activity</title>
      </Head>
      <Gauge />
      <Footer />
    </>
  );
}