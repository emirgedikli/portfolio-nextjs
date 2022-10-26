import Header from "@src/components/header/index";
import Footer from "@src/components/footer/index";
import ViewProjects from "@src/components/viewprojects/index"

let styles = {
  header: "bg-[#1f2937] pt-10 pb-4 px-10 lg:pt-2",
  body: "bg-[#1f2937] px-10 pt-8 pb-28 fontNunito text-white opacity-95 lg:pr-32 lg:pt-20 lg:pb-52",
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
