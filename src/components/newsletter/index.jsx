import Image from "next/image";
import Newsletterimg from "@src/assets/img/newsletter.png";

let styles = {
  NSdiv:
    "container md:w-2/3 xl:w-auto mx-auto flex flex-col xl:items-stretch justify-between xl:flex-row",
  NSdiv1:
    "xl:w-1/2 md:mb-14 xl:mb-0 relative h-auto flex items-center justify-center",
  NSdiv1img: "h-full xl:w-full lg:w-1/2 w-full",
  NSdiv2: "w-full xl:w-1/2 xl:pl-40 xl:py-28",
  NSdiv2h1:
    "text-2xl md:text-4xl xl:text-5xl font-bold leading-10 text-gray-800 mb-4 text-center xl:text-left md:mt-0 mt-4",
  NSdiv2p: "text-base leading-normal text-gray-600 text-center xl:text-left",
  NSdiv3: "flex items-stretch mt-12",
  NSdiv3input:
    "bg-gray-100 rounded-lg rounded-r-none text-base leading-none text-gray-800 p-5 w-4/5 border border-transparent focus:outline-none focus:border-gray-500",
  NSdiv3btn:
    "w-32 rounded-l-none hover:bg-indigo-600 bg-indigo-700 rounded text-base font-medium leading-none text-white p-5 uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700",
};

const Newsletter = () => {
  return (
    <>
      <div className={styles.NSdiv}>
        <div className={styles.NSdiv1}>
          <Image
            src={Newsletterimg}
            alt="newsletterimg"
            className={styles.NSdiv1img}
          />
        </div>
        <div className={styles.NSdiv2}>
          <h1 className={styles.NSdiv2h1}>Subscribe</h1>
          <p className={styles.NSdiv2p}>
            Pour exprimer votre opinion, vous pouvez envoyer votre message après
            avoir précisé votre adresse électronique dans le cadre ci-dessous.
            Vous pouvez utiliser les liens en bas de page pour me contacter.
          </p>
          <div className={styles.NSdiv3}>
            <input
              className={styles.NSdiv3input}
              type="email"
              placeholder="Votre Email"
            />
            <button className={styles.NSdiv3btn}>envoyer</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
