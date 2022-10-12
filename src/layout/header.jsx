import Image from 'next/image'
import profil from '@src/assets/img/profil.png'

let styles = {
    IDdiv: "flex flex-col items-center text-black w-screen h-screen",
    IDdiv1h1: "text-4xl py-8 fontCinzel text-white opacity-60 text-4xl",
    IDdiv2: "flex justify-around text-lg fontQuicksand text-white opacity-90 pb-8",
    IDdiv2cv: "px-4",
    IDdiv2contact: "font-black bg-blue-500 rounded-md px-2 opacity-100",
    IDdiv3: "flex flex-col",
    imgProfil: "rounded-3xl"
};

const HomePage = () => {
    return (
        // ID div
        <div className={styles.IDdiv}>
            {/* ID div1 */}
            <div className={styles.IDdiv1h1}>
                <h1>Emir Gedikli</h1>
            </div>
            {/* ID div2 */}
            <div className={styles.IDdiv2}>
                    <button>Accueil</button>
                    <button className={styles.IDdiv2cv}>cv</button>
                    <button className={styles.IDdiv2contact}>Contact</button>
            </div>
            {/* ID div3 */}
            <div className={styles.IDdiv3}>
                <Image src={profil} alt="profil" height="300px" width="300px" className={styles.imgProfil} />
            </div>
        </div>
    )
}

export default HomePage;
