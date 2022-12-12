import "aos/dist/aos.css";

let styles = {
  section: "flex justify-center lg:flex lg:justify-start",
  viewBtn:
    "flex justify-center w-56 uppercase text-white text-center text-xs font-semibold py-2 rounded border border-cyan-500 hover:border-transparent hover:bg-cyan-500 hover:text-white dark:text-gray-400 dark:hover:text-white lg:w-48 lg:mt-6",
};

const ViewBtn = () => {
  return (
    <>
      <section className={styles.section}>
        <a
          href="https://cv-emir.netlify.app/"
          rel="noreferrer"
          target="_blank"
          className={styles.viewBtn}
        >
          View Resume
        </a>
      </section>
    </>
  );
};

export default ViewBtn;
