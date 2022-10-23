import Header from "@src/components/header/index";
import Newsletter from "@src/components/newsletter";
import Footer from "@src/components/footer/index";

let styles = {
  header: "bg-[#1f2937] pt-10 pb-4 px-10 lg:pb-16",
  body: "bg-[#1f2937] px-10 py-24 fontNunito text-white opacity-95 lg:px-10",
  footer: "bg-[#1f2937]"
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
        <Footer />
      </div>
    </>
  );
};

export default Contact;
