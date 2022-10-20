import Head from "next/head";
import Navbar from "@src/Components/navbar";
import Introduction from "@src/Components/intro";
import ViewCv from "@src/Components/view";
import Works from "@src/Components/titles";
import Projects from "@src/Components/projects";
import projectStepper from "@src/Components/stepper";
import Informations from "@src/Components/infos";

let styles = {
  HomeBody: "bg-[#1f2937] min-h-screen min-w-screen",
  HomeBodyDiv1: "py-6 px-10",
};

const HomePage = () => {
  return (
    <div className={styles.HomeBody}>
      <Head>
        <title>Emir Gedikli</title>
      </Head>
      <div className={styles.HomeBodyDiv1}>
        <Navbar />
        <Introduction />
        <Works />
        <Projects />
        <projectStepper />
      </div>
      <Informations />
    </div>
  );
};

export default HomePage;
