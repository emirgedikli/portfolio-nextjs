import Link from "next/link";

let styles = {
  header:
    "flex flex-col items-center text-black lg:grid lg:grid-cols-2",
  name: "fontMeddon text-white text-2xl opacity-60 lg:flex lg:justify-center lg:text-3xl",
  nav: "flex fontNunito text-xl opacity-90 font-medium pt-8 pb-4 lg:flex lg:justify-center lg:text-2xl lg:pt-6 lg:pb-4",
  Accueil:
    "block px-3 text-white rounded lg:bg-transparent lg:text-white-700 lg:p-0 dark:text-white",
  Projets:
    "lg:mx-16 block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent",
  Skills:
    "block pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent",
  Contact:
    "lg:mx-16 block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent",
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
