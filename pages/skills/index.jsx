import Header from "@src/components/header/index";
import Footer from "@src/components/footer/index";
import IworkWith from "@src/components/iworkwith/index";

let styles = {
  header: "bg-[#1f2937] pt-10 pb-4 px-10 lg:pt-2",
  body: "bg-[#1f2937] px-10 py-16 fontNunito text-white opacity-95 lg:flex lg:justify-center lg:pl-32 lg:pr-32 lg:pt-52 lg:pb-52",
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
