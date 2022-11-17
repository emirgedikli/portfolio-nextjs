import Link from "next/link";

let styles = {
  name: "fontMeddon text-white text-2xl opacity-60 lg:flex lg:justify-center lg:text-4xl",
};

const Name = () => {
  return (
    <>
      <Link href="/">
        <div data-aos="flip-left">
          <h1 className={styles.name}>Emir Gedikli</h1>
        </div>
      </Link>
    </>
  );
};

export default Name;
