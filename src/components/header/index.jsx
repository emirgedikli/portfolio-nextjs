import Name from "@src/components/name/index";
import "animate.css";

let styles = {
  header: "lg:flex lg:py-10 lg:w-full",
  name: "flex justify-center w-full py-8 lg:flex lg:justify-center lg:w-full",
};

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
