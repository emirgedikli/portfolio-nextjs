import Links from "@src/components/links";

let styles = {
  FTdiv: "bg-[#1f2937] fontNunito text-white opacity-90",
  FTdiv01: "px-16 py-4 lg:grid lg:grid-cols-2",
  FTdiv1: "lg:py-4 lg:pl-72",
  FTdiv2: "flex pt-2 pb-3",
  FTdiv3: "flex pt-2",
  FTdiv4: "flex pt-1",
  FTdiv5: "pt-6 lg:pt-12",
  FTh6: "font-bold pr-2",
  FThr: "w-64 lg:w-64",
};

const Footer = () => {
  return (
    <footer className={styles.FTdiv}>
      <div className={styles.FTdiv01}>
        <div className={styles.FTdiv1}>
          <div className={styles.FTdiv2}>
            <h4>Contactez-moi:</h4>
          </div>
          <hr className={styles.FThr} />
          <div className={styles.FTdiv3}>
            <h6 className={styles.FTh6}>Tel:</h6>
            <a href="tel:+33767245024">+33767245024</a>
          </div>
          <div className={styles.FTdiv4}>
            <h6 className={styles.FTh6}>E-mail:</h6>
            <a
              href="mailto:emirwtaha@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              emirwtaha@gmail.com
            </a>
          </div>
        </div>
        <div className={styles.FTdiv5}>
          <Links />
        </div>
      </div>
    </footer>
  );
};

export default Footer;