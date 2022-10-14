import NightsStayIcon from '@mui/icons-material/NightsStay';

let styles = {
    HDmain: "",
    HDdiv: "flex flex-col items-center text-black",
    HDdiv1h1: "py-4 fontMeddon text-white opacity-60 text-3xl",
    HDdiv2: "flex justify-around text-lg fontNunito text-white py-4",
    HDdiv2acceuil: "opacity-90",
    HDdiv2cv: "px-4 opacity-90 uppercase",
    HDdiv2contact: "bg-blue-600 rounded-md px-2 font-medium",
    HDdiv2darkmode: "ml-6",
};

const Header = () => {
    return (
        <main className={styles.HDmain}>
            {/* // HD div */}
            <div className={styles.HDdiv}>
                {/* HD div1 */}
                <div className={styles.HDdiv1h1}>
                    <a href="#"><h1>Emir Gedikli</h1></a>
                </div>
                {/* HD div2 */}
                <div className={styles.HDdiv2}>
                    <button className={styles.HDdiv2acceuil}>Accueil</button>
                    <button className={styles.HDdiv2cv}>cv</button>
                    <button className={styles.HDdiv2contact}>Contact</button>
                    <button><NightsStayIcon className={styles.HDdiv2darkmode} /></button>
                </div>
            </div>
        </main>
    )
}

export default Header;
