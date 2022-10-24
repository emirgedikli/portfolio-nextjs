import Link from "next/link";
import HomePage from "@pages/home/index";
import Projects from "@pages/projects/index";
import Contact from "@pages/contact/index";

let styles = {
  header:
    "flex flex-col items-center text-black pt-8 lg:grid lg:grid-cols-2 lg:pt-8",
  name: "fontMeddon text-white text-3xl opacity-60 lg:flex lg:justify-center lg:text-4xl",
  nav: "flex fontNunito text-xl opacity-90 font-medium pt-10 pb-6 lg:flex lg:justify-center lg:text-2xl",
  Accueil:
    "block py-2 px-3 text-white rounded lg:bg-transparent lg:text-white-700 lg:p-0 dark:text-white",
  Projets:
    "mx-3 lg:mx-16 block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",
  Skills:
    "block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",
  Contact:
    "mx-3 lg:mx-16 block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",
};

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.name}>
        <h1>Emir Gedikli</h1>
      </div>
      <nav className={styles.nav}>
        <Link href="/">
          <button className={styles.Accueil}>Accueil</button>
        </Link>
        <Link href="/projects">
          <button className={styles.Projets}>Projets</button>
        </Link>
        <Link href="/skills">
          <button className={styles.Skills}>Skills</button>
        </Link>
        <Link href="/contact">
          <button className={styles.Contact}>Contact</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
