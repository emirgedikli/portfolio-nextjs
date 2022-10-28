import Link from "next/link";

let styles = {
  name: "fontMeddon text-white text-2xl opacity-60 lg:flex lg:justify-center lg:text-4xl",
};

const Name = () => {
  return (
    <>
      <Link href="/">
        <h1 className={styles.name}>Emir Gedikli</h1>
      </Link>
    </>
  );
};

export default Name;
