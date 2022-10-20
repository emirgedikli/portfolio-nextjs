import Head from "next/head";
import Navbar from "@src/Components/navbar";
import Introduction from "@src/Components/introduction";
import ViewCv from "@src/Components/viewCV";
import Works from "@src/Components/works";
import Projects from "@src/Components/projects";
import ProjectStepper from "@src/Components/ProjectStepper"
import Informations from "@src/Components/informations";

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
        <ProjectStepper />
      </div>
      <Informations />
    </div>
  );
};

export default HomePage;
