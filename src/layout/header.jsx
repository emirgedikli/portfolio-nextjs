import Image from 'next/image'
import profil from '@src/assets/img/profil.png'

let styles = {
    IDdiv: "flex flex-col items-center text-black w-screen h-screen",
    IDdiv1h1: "text-4xl py-8 text-xl fontCinzel text-white opacity-70 text-3xl",
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
            <div>
                <Image src={profil} alt="profil" height="300px" width="300px" className={styles.imgProfil} />
            </div>
            {/* ID div3 */}
            <div className={styles.IDdiv3}>

            </div>
        </div>
    )
}

export default HomePage;
