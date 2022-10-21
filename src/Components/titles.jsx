import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Carousel from "@src/Components/Skills";

let styles = {
  MSdiv: "lg:mt-20",
  MSdiv1: "",
  MSdiv2:
    "flex justify-center items-center bg-transparent animate-bounce text-2xl text-gray-500",
  MSdiv3: "py-12 font-bold text-white text-center text-4xl opacity-70",
  MSdiv4: "",
  MSdiv5: "py-12 font-bold text-white text-center text-4xl opacity-70",
};

let Works = () => {
  return (
    // MS div
    <div className={styles.MSdiv}>
      {/* MS div 1 */}
      <div className={styles.MSdiv1}>
        {/* MS div 2 */}
        <div className={styles.MSdiv2}>
          <ExpandMoreIcon sx={{ fontSize: 50 }} />
        </div>
        {/* MS div 3 */}
        <div className={styles.MSdiv3}>
          <h1>Mes compétences</h1>
        </div>
        {/* MS div 4 */}
        <div className={styles.MSdiv4}>
          <Carousel />
        </div>
        {/* MS div 5 */}
        <div className={styles.MSdiv5}>
          <h1>Mes projets</h1>
        </div>
      </div>
    </div>
  );
};

export default Works;
