import Header from "@src/components/header/index";
import Footer from "@src/components/footer/index";

let styles = {
  header: "bg-[#1f2937] py-10 px-10 pb-12",
  body: "bg-[#1f2937] min-h-screen px-10 pb-12 lg:pb-52",
};

const Projects = () => {
  return (
    <>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.body}>
        <div>
          <h1 className="text-center text-gray-800 dark:text-gray-300 pb-20 text-5xl font-extrabold">
            Mes projets...
          </h1>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
};

export default Projects;
