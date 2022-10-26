import Link from "next/link";
import Name from "@src/components/name/index";

let styles = {
  header: "lg:flex lg:pt-12 lg:pb-4",
  name: "lg:flex lg:justify-start",
  nav: "lg:flex lg:justify-end lg:text-2xl lg:pt-6 lg:pb-4",
  Accueil: "lg:bg-transparent lg:text-white lg:p-0 dark:text-white",
  Projets: "lg:mx-16 lg:text-white",
  Skills: "lg:text-white",
  Contact: "lg:mx-16 lg:text-white",
};

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.name}>
        <Name />
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
