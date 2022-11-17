import Head from "next/head";
import Header from "@src/components/header/index";
import Introduction from "@src/components/introduction/index";
import ViewProjects from "@src/components/viewprojects";
import IworkWith from "@src/components/iworkwith";
import Newsletter from "@src/components/newsletter";
import Footer from "@src/components/footer/index";

let styles = {
  header: "bg-gray-900",
  introduction:
    "bg-gray-900 px-10 py-16 fontNunito text-white opacity-95 lg:pr-32 lg:pt-52 lg:pb-52",
  viewprojects:
    "bg-gray-900 px-10 py-16 fontNunito text-white opacity-90 lg:pr-32 lg:pt-52 lg:pb-52",
  iworkwith:
    "bg-gray-900 px-10 py-16 fontNunito text-white opacity-95 lg:flex lg:justify-center lg:py-52",
  newsletter:
    "bg-gray-900 px-10 pb-28 pt-16 fontNunito text-white opacity-90",
  footer: "bg-gray-900",
};

const HomePage = () => {
  return (
    <>
      <Head>
        <title>EG - Portfolio</title>
      </Head>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.introduction}>
        <Introduction />
      </div>
      <div className={styles.viewprojects}>
        <ViewProjects />
      </div>
      <div className={styles.iworkwith}>
        <IworkWith />
      </div>
      <div className={styles.newsletter}>
        <Newsletter />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
