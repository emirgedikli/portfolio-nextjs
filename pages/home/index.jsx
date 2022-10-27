import Head from "next/head";
import Header from "@src/components/header/index";
import Introduction from "@src/components/introduction/index";
import Footer from "@src/components/footer/index";

let styles = {
  header: "bg-[#1f2937]",
  body: "bg-[#1f2937] px-10 py-16 fontNunito text-white opacity-95 lg:pr-32 lg:pt-52 lg:pb-52",
  footer: "bg-[#1f2937]",
};

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Emir Gedikli</title>
      </Head>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.body}>
        <Introduction />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
