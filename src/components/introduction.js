import Image from "next/image";
import profil from "@src/assets/img/profil.png";
import ViewBtn from "src/components/viewBtn";
import Links from "src/components/links";
import "aos/dist/aos.css";

let styles = {
  section: "flex flex-col lg:grid lg:grid-cols-2",
  div1: "flex justify-center relative overflow-hidden bg-no-repeat bg-cover",
  Image:
    "rounded-3xl max-w-xs hover:scale-110 transition duration-300 ease-in-out",
  div2: "pt-6 opacity-90",
  div2_h2: "text-white text-md lg:text-3xl",
  div2_span:
    "btn-shine fontFjallaOne text-3xl font-bold text-[#db6e42] pl-1 lg:text-5xl",
  div3: "fontArchivoBlack pt-6 text-3xl text-[#119ca3] lg:text-7xl",
  div4: "text-md fontNunito text-white pt-4 leading-loose lg:text-2xl",
  div5: "mt-8",
  div6: "flex justify-center pt-10 lg:flex lg:justify-start lg:pt-0",
};

const Introduction = () => {
  return (
    <>
      <section data-aos="flip-down" className={styles.section}>
        {/* lg: left column */}
        <div>
          <div className={styles.div1}>
            <Image
              src={profil}
              alt="profil"
              title="EmirGedikli"
              height={500}
              width={500}
              className={styles.Image}
            />
          </div>
        </div>
        {/* lg: right column */}
        <div>
          <div className={styles.div2}>
            <h2 className={styles.div2_h2}>
              Bonjour! Je suis
              <span className={styles.div2_span}>Emir Gedikli</span>
            </h2>
          </div>
          <div className={styles.div3}>
            <h1>Développeur Web front-end</h1>
          </div>
          <div className={styles.div4}>
            <p>
              Étant actuellement en formation au sein de l&apos;Access Code
              School, en tant que futur développeur web et web mobile.
            </p>
          </div>
          <div className={styles.div5}>
            <ViewBtn />
          </div>
          <div className={styles.div6}>
            <Links />
          </div>
        </div>
      </section>
    </>
  );
};

export default Introduction;
