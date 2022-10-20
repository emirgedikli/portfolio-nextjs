import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Carousel from "@src/Components/competences";

let styles = {
  MSdiv: "lg:mt-20",
  MSdiv1: "",
  MSdiv2:
    "flex justify-center items-center bg-transparent animate-bounce text-2xl text-gray-500",
  MSdiv3: "font-bold text-white text-center text-4xl opacity-70",
  MSdiv4: "",
};

let Works = () => {
  return (
    // MS div
    <div className={styles.MSdiv}>
      {/* MS div 1 */}
      <div className={styles.MSdiv1}>
        {/* MS div 2 */}
        <div className={styles.MSdiv2}>
          <a href="#">
            <ExpandMoreIcon sx={{ fontSize: 50 }} />
          </a>
        </div>
        {/* MS div 3 */}
        <div className={styles.MSdiv3}>
          <h1>Compétences</h1> 
        </div>
        {/* MS div 4 */}
        <div className={styles.MSdiv4}>
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default Works;
