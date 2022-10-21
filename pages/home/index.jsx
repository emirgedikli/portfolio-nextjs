import Head from "next/head";
import Header from "@src/Components/header";
import Introduction from "@src/Components/introduction";
import ViewBtn from "@src/Components/viewbtn";
import Titles from "@src/Components/titles";
import Projects from "@src/Components/projects";
import Footer from "@src/Components/footer";

let styles = {
  body: "bg-[#1f2937] min-h-screen min-w-screen py-6 px-10",
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
        <Titles />
        <Projects />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
