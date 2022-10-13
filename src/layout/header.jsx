import Image from 'next/image'
import profil from '@src/assets/img/profil.png'
import NightsStayIcon from '@mui/icons-material/NightsStay';

let styles = {
    HDdiv: "flex flex-col items-center text-black w-screen h-screen",
    HDdiv1h1: "py-8 fontMeddon text-white opacity-60 text-3xl",
    HDdiv2: "flex justify-around text-lg fontQuicksand text-white opacity-90 pb-8",
    HDdiv2cv: "px-4",
    HDdiv2contact: "font-black bg-blue-500 rounded-md px-2 opacity-100",
    HDdiv2darkmode: "ml-6",
    HDdiv3: "flex flex-col",
    imgProfil: "rounded-3xl"
};

const Header = () => {
    return (
        // HD div
        <div className={styles.HDdiv}>
            {/* HD div1 */}
            <div className={styles.HDdiv1h1}>
                <h1>Emir Gedikli</h1>
            </div>
            {/* HD div2 */}
            <div className={styles.HDdiv2}>
                    <button>Accueil</button>
                    <button className={styles.HDdiv2cv}>cv</button>
                    <button className={styles.HDdiv2contact}>Contact</button>
                    <button><NightsStayIcon className={styles.HDdiv2darkmode} /></button>
            </div>
            {/* HD div3 */}
            <div className={styles.HDdiv3}>
                <Image src={profil} alt="profil" height="300px" width="300px" className={styles.imgProfil} />
            </div>
        </div>
    )
}

export default Header;
