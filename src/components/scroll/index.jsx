import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import "aos/dist/aos.css";

let styles = {
  div: "fixed rounded-full h-12 w-12 2xl:h-16 2xl:w-16 flex items-center justify-center right-12 bottom-20 xl:bottom-24 bg-blue-600 text-white animate-bounce hidden z-10 lg:flex",
};

const Scroll = () => {
  function hideBtn() {
    const myButton = document.getElementById("myBtn");
    myButton.style.display = "none";
  }

  function topFunction() {
    console.log(document.body);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    hideBtn();
  }

  return (
    <button onClick={topFunction} id="myBtn" className={styles.div}>
      <ArrowUpwardIcon />
    </button>
  );
};

export default Scroll;
