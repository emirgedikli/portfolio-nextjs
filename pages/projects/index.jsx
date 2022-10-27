import Header from "@src/components/header/index";
import Footer from "@src/components/footer/index";
import ViewProjects from "@src/components/viewprojects/index";

let styles = {
  header: "bg-[#1f2937]",
  body: "bg-[#1f2937] px-10 py-16 fontNunito text-white opacity-95 lg:pr-32 lg:pt-52 lg:pb-52",
  footer: "bg-[#1f2937]",
};

const Projects = () => {
  return (
    <>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.body}>
        <ViewProjects />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
};

export default Projects;
