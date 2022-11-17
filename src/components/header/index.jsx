import styles from "@src/components/header/styles";
import Name from "@src/components/name/index";
import "animate.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.name}>
        <Name />
      </div>
    </header>
  );
};

export default Header;
