import Image from "next/image";
import Newsletterimg from "@src/assets/img/newsletterIMG/newsletter.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";

let styles = {
  section: "flex justify-center lg:flex lg:justify-center lg:-mr-24",
  sectionDiv: "w-full max-w-2xl px-6 mx-auto bg-transparent",
  h2: "text-3xl font-semibold text-center text-white",
  p: "mt-3 w-70 text-center text-white",
  div1: "grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3",
  icons:
    "flex flex-col items-center px-4 py-3 text-white transition-colors duration-300 transform rounded-md",
  spans: "mt-2",
  div2: "mt-6",
  div2divA: "items-center -mx-2 md:flex",
  div2divLabel: "w-full mx-2 mt-4 md:mt-0",
  email: "block mb-2 text-sm font-medium text-white",
  inputEmail:
    "block w-full px-4 py-2 text-white bg-transparent border rounded-md dark:bg-gray-800 dark:border-gray-700 focus:border-gray-700 focus:ring-gray-700 dark:focus:border-white-800 focus:outline-none focus:ring focus:ring-opacity-40",
  div2divB: "w-full mt-4",
  message: "block mb-2 text-sm font-medium text-white",
  divBtextarea:
    "block w-full h-40 px-4 py-2 text-white bg-transparent border rounded-md dark:bg-gray-800 dark:border-gray-700 focus:border-gray-700 focus:ring-gray-700 dark:focus:border-white-800 focus:outline-none focus:ring focus:ring-opacity-40",
  div2divC: "flex justify-center mt-6",
  sendBtn:
    "px-4 py-2 text-white transition-colors duration-300 transform bg-gray-800 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600",
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
              <LocationOnIcon />

              <span className={styles.spans}>Paris 75000</span>
            </div>

            <div className={styles.icons}>
              <CallIcon />

              <span className={styles.spans}>+33767245024</span>
            </div>

            <div className={styles.icons}>
              <EmailIcon />

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
