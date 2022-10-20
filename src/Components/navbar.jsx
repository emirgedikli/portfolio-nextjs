import Link from "next/link";
import NightsStayIcon from "@mui/icons-material/NightsStay";

let styles = {
  HDdiv: "",
  HDdiv1: "flex flex-col items-center text-black lg:grid lg:grid-cols-2",
  HDdiv2: "py-4 fontMeddon text-white opacity-60 text-3xl lg:flex lg:justify-center lg:text-4xl",
  HDdiv3: "flex justify-around text-lg fontNunito text-white py-4 lg:flex lg:justify-center lg:text-2xl",
  HDac: "opacity-90 lg:mr-10",
  HDcv: "opacity-90 px-8 font-medium lg:mx-10",
  HDdm: "opacity-90 mb-1 lg:ml-10",
};

const Navbar = () => {
  return (
    // HDdiv
    <div className={styles.HDdiv}>
      {/* HD div 1 */}
      <div className={styles.HDdiv1}>
        {/* HD div 2 */}
        <div className={styles.HDdiv2}>
          <Link href={"https://gedikli-portfolio.netlify.app/"}>
            <h1>Emir Gedikli</h1>
          </Link>
        </div>
        {/* HD div 3 */}
        <div className={styles.HDdiv3}>
          <Link href={"https://gedikli-portfolio.netlify.app/"}>
            <button className={styles.HDac}>Accueil</button>
          </Link>
          <Link href={"https://cv-emir.netlify.app/"}>
            <button className={styles.HDcv}>Infos</button>
          </Link>
          <button>
            <NightsStayIcon className={styles.HDdm} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
