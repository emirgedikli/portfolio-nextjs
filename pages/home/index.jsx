import GitHubIcon from '@mui/icons-material/GitHub';
import Image from 'next/image'
import dream from '../../src/assets/img/dream.jpg'

let styles = {
    flex: "flex",
    flexCol: "flex-col",
    itemsCenter: "items-center",
    justifyCenter: "justify-center",
    textBlack: "text-black",
    wScreen: "w-screen",
    hScreen: "h-screen",
    fontBold: "font-bold",
    text4xl: "text-4xl",
    py8: "py-8",
    textXl: "text-xl"
};

const HomePage = () => {
    return (
        <div className={`${styles.flex} ${styles.flexCol} ${styles.itemsCenter} ${styles.justifyCenter} ${styles.textBlack} ${styles.wScreen} ${styles.hScreen}`}>
            <div>
                <Image src={dream} alt="" width="350px" height="350px" />
            </div>
            <div>
                <h1 className={`${styles.fontBold} ${styles.text4xl} ${styles.py8}`}>Emir Gedikli</h1>
                <p className={`${styles.textXl}`}>Développeur Web Front-End</p>
            </div>
            <div className={`${styles.flex} ${styles.flexCol}`}>
                    <GitHubIcon />
                    <h3>Github</h3>
            </div>
        </div>
    )
}

export default HomePage;