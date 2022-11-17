import Link from "next/link";
import "animate.css";

let styles = {
  name: "fontMeddon text-white text-2xl opacity-60 lg:flex lg:justify-center lg:text-4xl",
  div: "animate__hinge infinite",
};

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
