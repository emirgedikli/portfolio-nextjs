import Head from "next/head";
import Header from "@src/Components/Header";
import Introduction from "@src/Components/Introduction";
import ViewBtn from "@src/Components/ViewBtn";
import Titles from "@src/Components/Titles.jsx";
import Projects from "@src/Components/Projects.jsx";
import Footer from "@src/Components/Footer";

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
