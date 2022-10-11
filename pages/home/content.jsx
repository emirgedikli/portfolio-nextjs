import Image from 'next/image'
import profil from '@src/assets/img/profil.png'
// import GitHubIcon from '@mui/icons-material/GitHub';

let styles = {
    IDdiv: "flex flex-col items-center text-black w-screen h-screen",
    IDdiv2h1: "text-4xl py-8 text-xl",
    IDdiv3: "flex flex-col",
};

const HomePage = () => {
    return (
        // ID div
        <div className={styles.IDdiv}>
            {/* ID div1 */}
            <div>
                <Image src={profil} alt="profil"/>
            </div>
            {/* ID div2 */}
            <div>
                <h1 className={styles.IDdiv2h1}>Emir Gedikli</h1>
            </div>
            {/* ID div3 */}
            <div className={styles.IDdiv3}>

            </div>
        </div>
    )
}

export default HomePage;