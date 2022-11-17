import styles from "@src/components/introduction/styles";
import Image from "next/image";
import profil from "@src/assets/img/profilIMG/profil.png";
import ViewBtn from "@src/components/viewbtn/index";
import "animate.css";

const Introduction = () => {
  return (
    <>
      <section className={styles.section}>
        {/* lg: left column */}
        <div>
          <div className={styles.div1}>
            <Image
              src={profil}
              alt="profil"
              title="EmirGedikli"
              height={500}
              width={450}
              className={styles.Image}
            />
          </div>
        </div>
        {/* lg: right column */}
        <div>
          <div className={styles.div2}>
            <h2 className={styles.div2h2}>
              Bonjour! Je suis
              <span className={styles.div2span}>Emir Gedikli</span>
            </h2>
          </div>
          <div className={styles.div3}>
            <h1>Développeur Web</h1>
          </div>
          <div className={styles.div4}>
            <p>
              Étant actuellement en formation au sein de l&apos;Access Code
              School, en tant que futur développeur web et web mobile, je suis à
              la recherche d&apos;opportunités pour mon stage qui démarrera le
              janvier 2023.
            </p>
          </div>
          <div className={styles.div5}>
            <ViewBtn />
          </div>
        </div>
      </section>
    </>
  );
};

export default Introduction;
