import styles from "@pages/404/styles";
import Link from "next/link";

const Error404 = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.mainh1}>404</h1>
      <div className={styles.maindiv}>Page Not Found</div>
      <span className={styles.mainSpan1}>
        <button className={styles.mainBtn}>
          <span className={styles.mainSpan2}></span>
          <span className={styles.mainSpan3}>
            <Link href="/">Go Home</Link>
          </span>
        </button>
      </span>
    </main>
  );
};

export default Error404;
