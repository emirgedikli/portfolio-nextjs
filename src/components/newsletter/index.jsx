import styles from "@src/components/newsletter/styles";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";

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
