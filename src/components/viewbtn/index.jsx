let styles = {
  VWdiv1CV:
    "flex justify-center w-full uppercase text-white text-center text-xs font-semibold py-2 rounded border border-cyan-500 hover:border-transparent hover:bg-cyan-500 hover:text-white dark:text-gray-400 dark:hover:text-white lg:w-44",
};

const ViewBtn = () => {
  return (
    <div>
      <div>
        <a
          href="https://cv-emir.netlify.app/"
          rel="noreferrer"
          target="_blank"
          className={styles.VWdiv1CV}
        >
          Voir CV
        </a>
      </div>
    </div>
  );
};

export default ViewBtn;
