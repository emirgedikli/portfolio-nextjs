import Link from "next/link";

let styles = {
  HDdiv1: "flex flex-col items-center text-black lg:grid lg:grid-cols-2",
  HDdiv2: "fontMeddon text-white text-3xl opacity-60 lg:flex lg:justify-center lg:text-4xl",
  HDdiv3: "fontNunito text-white text-xl opacity-90 font-medium pt-10 pb-6 lg:flex lg:justify-center lg:text-2xl",
  HDprojetsBtn: "px-6 lg:px-16",
};

const Header = () => {
  return (
    <header>
      <div className={styles.HDdiv1}>
        <div className={styles.HDdiv2}>
          <h1>Emir Gedikli</h1>
        </div>
        <div className={styles.HDdiv3}>
          <Link href={"/"}>
            <button>Accueil</button>
          </Link>
          <Link href={"/"}>
            <button className={styles.HDprojetsBtn}>Mes projets</button>
          </Link>
          <Link href={"/"}>
            <button>Contact</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
