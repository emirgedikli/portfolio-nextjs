import Link from "next/link";

let styles = {
  div: "flex flex-col items-center text-black lg:grid lg:grid-cols-2",
  div1: "fontMeddon text-white text-3xl opacity-60 lg:flex lg:justify-center lg:text-4xl",
  div2: "fontNunito text-white text-xl opacity-90 font-medium pt-10 pb-6 lg:flex lg:justify-center lg:text-2xl",
  divBtn2: "px-6 lg:px-16",
};

const Header = () => {
  return (
    <header>
      <div className={styles.div}>
        <div className={styles.div1}>
          <h1>Emir Gedikli</h1>
        </div>
        <div className={styles.div2}>
          <Link href={"/pages/home/index.jsx"}>
            <button>Accueil</button>
          </Link>
          <Link href={"/pages/mesprojets/index.jsx"}>
            <button className={styles.divBtn2}>Mes projets</button>
          </Link>
          <Link href={"/pages/contact/index.jsx"}>
            <button>Contact</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
