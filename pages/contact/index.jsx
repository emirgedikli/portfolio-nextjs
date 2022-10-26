import Header from "@src/components/header/index";
import Newsletter from "@src/components/newsletter";
import Links from "@src/components/links/index";

let styles = {
  header: "bg-[#1f2937] pt-10 pb-4 px-10 lg:pt-2",
  body: "bg-[#1f2937] px-10 py-16 fontNunito text-white opacity-95 lg:pr-32 lg:pt-52 lg:pb-52",
  footer: "bg-[#1f2937] text-white pt-10 pb-6",
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
      <div className={styles.footer}>
        <Links />
      </div>
    </>
  );
};

export default Contact;
