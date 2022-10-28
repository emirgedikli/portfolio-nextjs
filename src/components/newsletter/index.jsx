import Image from "next/image";
import Newsletterimg from "@src/assets/img/newsletterIMG/newsletter.png";

let styles = {
  section: "flex justify-center lg:flex lg:justify-center",
  sectionDiv:
    "w-full max-w-2xl px-6 py-4 mx-auto bg-gray-800 rounded-md shadow-md",
  h2: "text-3xl font-semibold text-center text-gray-800 dark:text-white",
  p: "mt-3 w-70 text-center text-gray-600 dark:text-gray-400",
  div1: "grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3",
  icons:
    "flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-300 transform rounded-md dark:text-gray-200",
  spans: "mt-2",
  div2: "mt-6",
  div2divA: "items-center -mx-2 md:flex",
  div2divLabel: "w-full mx-2 mt-4 md:mt-0",
  email: "block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200",
  inputEmail:
    "block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40",
  div2divB: "w-full mt-4",
  message: "block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200",
  divBtextarea:
    "block w-full h-40 px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40",
  div2divC: "flex justify-center mt-6",
  sendBtn:
    "px-4 py-2 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600",
};

const Newsletter = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.sectionDiv}>
          <h2 className={styles.h2}>Contactez-moi</h2>

          <p className={styles.p}>
            Vous avez des idées à partager avec moi ? Écrivez maintenant !
          </p>

          <div className={styles.div1}>
            <div className={styles.icons}>
              {/* konum */}

              <span className={styles.spans}>Paris 75000</span>
            </div>

            <div className={styles.icons}>
              {/* telefon */}

              <span className={styles.spans}>+33767245024</span>
            </div>

            <div className={styles.icons}>
              {/* mail */}

              <span className={styles.spans}>emirwtaha@gmail.com</span>
            </div>
          </div>

          <div className={styles.div2}>
            <div className={styles.div2divA}>
              <div className={styles.div2divLabel}>
                <label className={styles.email}>E-mail</label>

                <input className={styles.inputEmail} type="email" />
              </div>
            </div>

            <div className={styles.div2divB}>
              <label className={styles.message}>Message</label>

              <textarea className={styles.divBtextarea}></textarea>
            </div>

            <div className={styles.div2divC}>
              <button className={styles.sendBtn}>Envoyer</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
