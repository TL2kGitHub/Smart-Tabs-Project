import Chart from "../components/Chart";
import Head from "next/head";
import Footer from "../components/Footer";

export default function ChartPage() {
  return (
    <>
      <Head>
        <title>Smart Tabs - Activity Chart</title>
      </Head>
      <Chart />
      <Footer />
    </>
  );
}
