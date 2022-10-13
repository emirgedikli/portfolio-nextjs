import Image from 'next/image'
import profil from '@src/assets/img/profil.png'

let styles = {
    INTsection: "flex flex-col",
    INTdiv1: "flex justify-center",
    INTdiv1Profil: "rounded-3xl",
    INTdiv2: "pt-6 opacity-90",
    INTdiv2h2: "text-white text-lg",
    INTdiv2emoji: "pl-1",
    INTdiv2name: "fontFjallaOne text-3xl font-bold text-[#db6e42] pl-2",
    INTdiv3: "fontArchivoBlack pt-6 text-3xl text-[#119ca3]",
}

const Introduction = () => {
    return (
        // INT section
        <section className={styles.INTsection}>
            {/* INT div1 */}
            <div className={styles.INTdiv1}>
                <Image src={profil} alt="profil" className={styles.INTdiv1Profil} />
            </div>
            {/* INT div2 */}
            <div className={styles.INTdiv2}>
                <h2 className={styles.INTdiv2h2}>Bonjour<span className={styles.INTdiv2emoji}>
                <span class="ec ec-wave"></span></span>!
                Je suis<span className={styles.INTdiv2name}>Emir Gedikli</span></h2>
            </div>
            {/* INT div3 */}
            <div className={styles.INTdiv3}>
                <h1>Développeur Web Front-End</h1>
            </div>
            {/* INT div4 */}
            <div>
                
            </div>
        </section>
    )
}

export default Introduction;
