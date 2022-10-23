import Header from "@src/components/header/index";
import Newsletter from "@src/components/newsletter";
import Links from "@src/components/links/index";

let styles = {
  header: "bg-[#1f2937] pt-10 pb-4 px-10 lg:pb-16",
  body: "bg-[#1f2937] px-10 py-32 fontNunito text-white opacity-95 lg:px-10 lg:py-32",
};

const Contact = () => {
  return (
    <>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.body}>
        <Newsletter />
      </div>
    </>
  );
};

export default Contact;
