import Name from "@components/name";
import "aos/dist/aos.css";

let styles = {
  header: "lg:flex lg:py-10 lg:w-full",
  name: "flex justify-center w-full py-8 lg:flex lg:justify-center lg:w-full",
  cursor: "cursor-pointer",
};

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.name}>
        <div className={styles.cursor}>
          <Name />
        </div>
      </div>
    </header>
  );
};

export default Header;
