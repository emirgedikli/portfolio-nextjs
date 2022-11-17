import styles from "@src/components/viewbtn/styles";

const ViewBtn = () => {
  return (
    <>
      <section className={styles.section}>
        <a
          href="https://cv-emir.netlify.app/"
          rel="noreferrer"
          target="_blank"
          className={styles.ViewBtn}
        >
          Voir CV
        </a>
      </section>
    </>
  );
};

export default ViewBtn;
