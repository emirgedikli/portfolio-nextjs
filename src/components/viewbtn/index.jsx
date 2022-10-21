import Links from "@src/components/links/index";

let styles = {
  VWdiv: "",
  VWdiv1: "",
  VWdiv1CV:
    "flex justify-center w-full uppercase text-white text-center text-xs font-semibold py-2 px-8 rounded border border-cyan-500 hover:border-transparent hover:bg-cyan-500 hover:text-white dark:text-gray-400 dark:hover:text-white lg:w-44",
  VWdiv2: "pt-6 text-white lg:flex",
};

const ViewBtn = () => {
  return (
    // VW div
    <div>
      {/* VW div 1 */}
      <div className={styles.VWdiv1}>
        <a
          href="https://cv-emir.netlify.app/"
          rel="noreferrer"
          target="_blank"
          className={styles.VWdiv1CV}
        >
          Voir CV
        </a>
      </div>
      {/* VW div 2 */}
      <div className={styles.VWdiv2}>
        <Links />
      </div>
    </div>
  );
};

export default ViewBtn;
