import Links from "@src/components/links";

let styles = {
  footer: "fontNunito text-white opacity-90",
  div: "px-16 py-4 lg:grid lg:grid-cols-2 lg:py-4",
  div1: "pt-6 lg:py-4 lg:pl-72",
  div2: "pt-16 pb-4 lg:pt-0",
  div3: "flex pt-2 pb-3",
  div4: "flex pt-2",
  div5: "flex pt-1",
  h6: "font-bold pr-2",
  hr: "w-64 lg:w-64",
};

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.div}>
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-once="false"
          className={styles.div1}
        >
          <div className={styles.div3}>
            <h4>Contactez-moi:</h4>
          </div>
          <hr className={styles.hr} />
          <div className={styles.div4}>
            <h6 className={styles.h6}>Tel:</h6>
            <a href="tel:+33767245024">+33767245024</a>
          </div>
          <div className={styles.div5}>
            <h6 className={styles.h6}>E-mail:</h6>
            <a
              href="mailto:emir@bygedikli.dev"
              rel="noreferrer"
              target="_blank"
            >
              emir@bygedikli.dev
            </a>
          </div>
        </div>
        <div className={styles.div2}>
          <Links />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
