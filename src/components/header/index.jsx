import Link from "next/link";
import HomePage from "@pages/home/index";
import Projects from "@pages/projects/index";
import Contact from "@pages/contact/index";

let styles = {
  div: "flex flex-col items-center text-black pt-8 lg:grid lg:grid-cols-2 lg:pt-8",
  div1: "fontMeddon text-white text-3xl opacity-60 lg:flex lg:justify-center lg:text-4xl",
  nav: "fontNunito text-white text-xl opacity-90 font-medium pt-10 pb-6 lg:flex lg:justify-center lg:text-2xl",
  BtnSpace: "px-6 lg:px-16",
};

const Header = () => {
  return (
    <header>
      <div className={styles.div}>
        <div className={styles.div1}>
          <Link href="/">
            <h1>Emir Gedikli</h1>
          </Link>
        </div>
        <nav className={styles.nav}>
          <Link href="/">
            <button>Accueil</button>
          </Link>
          <Link href="/projects">
            <button className={styles.BtnSpace}>Projets</button>
          </Link>
          <Link href="/skills">
            <button>Skills</button>
          </Link>
          <Link href="/contact">
            <button className={styles.BtnSpace}>Contact</button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
