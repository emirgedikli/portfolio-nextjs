import Image from 'next/image'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Html from '@src/assets/img/Html.png';

let styles = {
    MSsection: "",
    MSdiv: "",
    MSdiv1: "flex justify-center items-center bg-transparent animate-bounce text-2xl text-gray-500",
    MSdiv2: "font-bold text-white text-center text-4xl opacity-70",
    MSdiv3: "",
    MSdiv3divA: "bg-[#374151] rounded-full mx-24 py-8 my-12",
    MSdiv3divAdivImage1: "flex justify-center",
    MSdiv3divAdivh3: "flex justify-center uppercase text-white opacity-50 pt-4",
}

let MyWorks = () => {
    return (
        // MS section
        <section className={styles.MSsection}>
            {/* MS div */}
            <div className={styles.MSdiv}>
                {/* MS div1 */}
                <div className={styles.MSdiv1}>
                    <a href="#skills"><ExpandMoreIcon sx={{ fontSize: 50 }} /></a>
                </div>
                {/* MS div 2 */}
                <div className={styles.MSdiv2}>
                    <h1>Je travail avec...</h1>
                </div>
                {/* MS div3 */}
                <div id='skills' className={styles.MSdiv3}>
                    <div className={styles.MSdiv3divA}>
                        <div className={styles.MSdiv3divAdivImage1}>
                            <Image src={Html} alt="php" height={50} width={80} />
                        </div>
                        <div className={styles.MSdiv3divAdivh3}>
                            <h3>html</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MyWorks;
