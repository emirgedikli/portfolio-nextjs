import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import "aos/dist/aos.css";

let styles = {
  section: "flex justify-center -mt-18 lg:flex lg:justify-center",
  section_div: "w-full max-w-2xl px-6 mx-auto bg-transparent",
  h2: "text-3xl font-semibold text-center text-white",
  p: "mt-3 w-70 text-center text-white",
  div1: "grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3",
  icons:
    "flex flex-col items-center px-4 py-3 text-white transition-colors duration-300 transform rounded-md",
  spans: "mt-2",
  div2: "mt-6",
  div2_divA: "items-center -mx-2 md:flex",
  div2_divLabel: "w-full mx-2 mt-4 md:mt-0",
  email: "block mb-2 text-sm font-medium text-white",
  input_email:
    "block w-full px-4 py-2 text-white bg-transparent border rounded-md dark:bg-gray-800 dark:border-white focus:border-white focus:ring-white dark:focus:border-white-800 focus:outline-none focus:ring focus:ring-opacity-40",
  div2_divB: "w-full mt-4",
  message: "block mb-2 text-sm font-medium text-white",
  divB_textarea:
    "block w-full h-40 px-4 py-2 text-white bg-transparent border rounded-md dark:bg-gray-800 dark:border-white focus:border-white focus:ring-white dark:focus:border-white-800 focus:outline-none focus:ring focus:ring-opacity-40",
  div2_divC: "flex justify-center mt-6",
  sendBtn:
    "px-4 py-2 text-white cursor-pointer transition-colors duration-300 transform bg-transparent border rounded-md dark:bg-gray-800 dark:border-white focus:border-white focus:ring-white dark:focus:border-white-800 focus:outline-none focus:ring focus:ring-opacity-40",
};

const Newsletter = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.section_div}>
          <div data-aos="zoom-in-up" data-aos-once="false">
            <h2 className={styles.h2}>Contactez-moi</h2>
            <p className={styles.p}>
              Vous avez des idées à partager avec moi ? Écrivez maintenant !
            </p>
          </div>

          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            data-aos-once="false"
            className={styles.div1}
          >
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

              <span className={styles.spans}>bygedikli@gmail.com</span>
            </div>
          </div>

          <form className={styles.div2}>
            <div className={styles.div2_divA}>
              <div className={styles.div2_divLabel}>
                <label className={styles.email}>E-mail</label>

                <input
                  className={styles.input_email}
                  type="email"
                  placeholder="Adresse email"
                />
              </div>
            </div>

            <div className={styles.div2_divB}>
              <label className={styles.message}>Message</label>

              <textarea
                className={styles.divB_textarea}
                rows="5"
                placeholder="Bonjour..."
              ></textarea>
            </div>

            <div className={styles.div2_divC}>
              <button
                data-aos="zoom-in-up"
                data-aos-once="false"
                type="submit"
                className={styles.sendBtn}
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
