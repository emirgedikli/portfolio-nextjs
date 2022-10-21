import Header from "@src/components/header/index";
import Footer from "@src/components/footer/index";

let styles = {
  body: "bg-[#1f2937] py-10 px-10 pb-12",
  h1: "fontNunito text-white text-xl opacity-90 font-medium pt-10 pb-6 lg:flex lg:justify-center lg:text-2xl",
  footer: "bottom-0 relative w-full",
};

const error404 = () => {
  <>
    <div className={styles.body}>
      <Header />
    </div>
    <div className={styles.h1}>
      <h1>Mauvaise page</h1>
    </div>
    <div className={styles.footer}>
      <Footer />
    </div>
  </>;
};

export default error404;
