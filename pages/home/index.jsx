import Head from "next/head";
import Header from "@src/components/header/index";
import Introduction from "@src/components/introduction/index";
import Footer from "@src/components/footer/index";

let styles = {
  body: "bg-[#1f2937] min-h-screen min-w-screen py-10 px-10",
};

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Emir Gedikli</title>
      </Head>
      <div className={styles.body}>
        <Header />
        <Introduction />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
