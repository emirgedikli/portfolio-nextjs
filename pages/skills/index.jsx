import Header from "@src/components/header/index";
import Footer from "@src/components/footer/index";

let styles = {
  header: "bg-[#1f2937] py-10 px-10 pb-12 lg:pb-52",
  body: "bg-[#1f2937] min-h-screen px-10 pb-12 lg:pb-52",
};

const Skills = () => {
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

export default Skills;
