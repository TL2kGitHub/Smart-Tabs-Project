import Home from "../components/Home";
import Footer from "../components/Footer";
import Head from "next/head";

export default function Index() {
  return (
    <>
      <Head>
        <title>Smart Tabs</title>
      </Head>
      <Home />
      <Footer />
    </>
  );
}
