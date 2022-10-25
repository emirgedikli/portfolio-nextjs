import Header from "@src/components/header/index";
import Footer from "@src/components/footer/index";
import ViewProjects from "@src/components/viewprojects/index"

let styles = {
  header: "bg-[#1f2937] pt-10 pb-4 px-10 lg:pb-16",
  body: "bg-[#1f2937] fontNunito pt-6 pb-24 px-10 opacity-95 text-white lg:px-10",
  footer: "bg-[#1f2937]"
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
