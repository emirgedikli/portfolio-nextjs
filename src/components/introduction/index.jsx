import Image from "next/image";
import profil from "@src/assets/img/profil.png";
import ViewBtn from "@src/components/viewbtn/index";

let styles = {
  section: "flex flex-col lg:grid lg:grid-cols-2 lg:mt-36 lg:mr-28",
  div1: "flex justify-center relative overflow-hidden bg-no-repeat bg-cover",
  div1Image:
    "rounded-3xl max-w-xs hover:scale-110 transition duration-300 ease-in-out",
  div2: "pt-6 opacity-90",
  div2h2: "text-white text-lg lg:text-3xl",
  div2span:
    "fontFjallaOne text-3xl font-bold text-[#db6e42] pl-2 lg:text-5xl",
  div3: "fontArchivoBlack pt-6 text-3xl text-[#119ca3] lg:text-7xl",
  div4: "text-sm fontNunito text-white pt-4 leading-loose lg:text-2xl",
  div5: "mt-8",
};

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
              className={styles.div1Image}
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
            <h1>Développeur Web Front-End</h1>
          </div>
          <div className={styles.div4}>
            <p>
              Étant actuellement en formation au sein de l&apos;Access Code
              School, en tant que futur développeur web et web mobile. Je suis à
              la recherche d&apos;opportunités pour mon stage qui démarrera le 9
              janvier jusqu&apos;à 3 mars 2023.
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
