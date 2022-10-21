import Head from "next/head";
import Header from "@src/components/header/index";
import Introduction from "@src/components/introduction/index";
import Footer from "@src/components/footer/index";

let styles = {
  body: "bg-[#1f2937] px-10 pb-12 lg:pb-52",
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
      <div>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
