import styles from "@src/components/name/styles";
import Link from "next/link";
import "animate.css";

const Name = () => {
  return (
    <>
      <Link href="/">
        <div className={styles.div}>
          <h1 className={styles.name}>Emir Gedikli</h1>
        </div>
      </Link>
    </>
  );
};

export default Name;
