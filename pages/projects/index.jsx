import Header from "@src/components/header/index";
import Footer from "@src/components/footer/index";

let styles = {
  header: "bg-[#1f2937] py-10 px-10 pb-12",
  body: "min-h-screen",
};

const Projects = () => {
  return (
    <>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.body}>

      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
};

export default Projects;
