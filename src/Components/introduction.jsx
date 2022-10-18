import Image from 'next/image'
import profil from '@src/assets/img/profil.png'

let styles = {
    INTdiv: "flex flex-col",
    INTdiv1: "flex justify-center",
    INTdiv1Profil: "rounded-3xl",
    INTdiv2: "pt-6 opacity-90",
    INTdiv2h2: "text-white text-lg",
    INTdiv2name: "fontFjallaOne text-3xl font-bold text-[#db6e42] pl-2",
    INTdiv3: "fontArchivoBlack pt-6 text-3xl text-[#119ca3]",
    INTdiv4: "text-sm fontNunito text-white pt-4 leading-loose",
    INTdiv5: "pt-8",
}

const Introduction = () => {
    return (
        // INT div
        <div className={styles.INTdiv}>
            {/* INT div1 */}
            <div className={styles.INTdiv1}>
                <Image src={profil} alt="profil" className={styles.INTdiv1Profil} />
            </div>
            {/* INT div2 */}
            <div className={styles.INTdiv2}>
                <h2 className={styles.INTdiv2h2}>Bonjour! Je suis<span className={styles.INTdiv2name}>Emir Gedikli</span></h2>
            </div>
            {/* INT div3 */}
            <div className={styles.INTdiv3}>
                <h1>Développeur Web Front-End</h1>
            </div>
            {/* INT div4 */}
            <div className={styles.INTdiv4}>
                <p>Étant actuellement en formation au sein de l&apos;Access Code School, en tant que futur développeur web et web mobile. Je suis à la recherche d&apos;opportunités pour mon stage qui démarrera le 9 janvier jusqu&apos;à 3 mars 2023.</p>
            </div>
            {/* INT div5*/}
            <div className={styles.INTdiv5}>
            </div>
        </div>
    )
}

export default Introduction;
