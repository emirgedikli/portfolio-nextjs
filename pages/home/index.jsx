import Head from "next/head";
import Header from "@src/components/header/index";
import Introduction from "@src/components/introduction/index";
import Footer from "@src/components/footer/index";

let styles = {
  header: "bg-[#1f2937] pt-10 pb-4 px-10 lg:pb-16",
  body: "bg-[#363f4b] px-10 py-16 fontNunito text-white lg:pr-32 lg:py-32",
  footer: "bg-[#1f2937]"
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
