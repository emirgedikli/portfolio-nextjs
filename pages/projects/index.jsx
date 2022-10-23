import Header from "@src/components/header/index";
import Footer from "@src/components/footer/index";

let styles = {
  header: "bg-[#1f2937] pt-10 pb-4 px-10 lg:pb-16",
  body: "bg-[#363f4b] min-h-screen fontNunito text-white lg:px-10",
  footer: "bg-[#1f2937]"
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
