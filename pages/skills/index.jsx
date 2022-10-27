import Header from "@src/components/header/index";
import Footer from "@src/components/footer/index";
import IworkWith from "@src/components/iworkwith/index";

let styles = {
  header: "bg-[#1f2937]",
  body: "bg-[#1f2937] px-10 py-16 fontNunito text-white opacity-95 lg:flex lg:justify-center lg:py-52",
  footer: "bg-[#1f2937]",
};

const Skills = () => {
  return (
    <>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.body}>
        <IworkWith />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
};

export default Skills;
