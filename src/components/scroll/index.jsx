import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

let styles = {
  div: "fixed rounded-full h-12 w-12 2xl:h-16 2xl:w-16 flex items-center justify-center right-12 bottom-20 xl:bottom-24 bg-blue-600 text-white animate-bounce hidden z-10 lg:flex",
};

const Scroll = () => {
  return (
    <section id="section2">
      <a href="#section1" className={styles.div}>
        <ArrowUpwardIcon />
      </a>
    </section>
  );
};

export default Scroll;
