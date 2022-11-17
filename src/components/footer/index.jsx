import styles from "@src/components/footer/styles";
import Links from "@src/components/links";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.div}>
        <div className={styles.div1}>
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
