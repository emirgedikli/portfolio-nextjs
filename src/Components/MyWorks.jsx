import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Carousel from '@src/Components/Competences'

let styles = {
    MSdiv: "",
    MSdiv1: "flex justify-center items-center bg-transparent animate-bounce text-2xl text-gray-500",
    MSdiv2: "font-bold text-white text-center text-4xl opacity-70",
    MSdiv3: "",
}

let MyWorks = () => {
    return (
        // MS section
        <section>
            {/* MS div */}
            <div className={styles.MSdiv}>
                {/* MS div1 */}
                <div className={styles.MSdiv1}>
                    <a href="#skills"><ExpandMoreIcon sx={{ fontSize: 50 }} /></a>
                </div>
                {/* MS div 2 */}
                <div className={styles.MSdiv2}>
                    <h1>Compétences</h1>
                </div>
                {/* MS div 3 */}
                <div className={styles.MSdiv3}>
                    <Carousel />
                </div>
            </div>
        </section>
    )
}

export default MyWorks;
