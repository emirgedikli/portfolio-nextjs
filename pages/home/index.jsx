import styles from "@pages/home/styles";
import Head from "next/head";
import Header from "@src/components/header/index";
import Introduction from "@src/components/introduction/index";
import ViewProjects from "@src/components/viewprojects";
import IworkWith from "@src/components/iworkwith";
import Newsletter from "@src/components/newsletter";
import Footer from "@src/components/footer/index";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Emir Gedikli</title>
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
