let styles = {
    div: "flex flex-col items-center justify-center text-black w-screen h-screen",
    text: "font-bold capitalize text-4xl py-8",
    text2: "text-xl"
};

const HomePage = () => {
    return (
        <div className={styles.div}>
            <h1 className={styles.text}>Gorkem Tumer</h1>
            <p className={styles.text2}>Web Developper</p>
            <div>
                <img src="../../src/assets/img/github.svg" alt="github"/>
                <img src="../../src/assets/img/github.svg" alt="linkedin"/>
                <img src="../../src/assets/img/github.svg" alt="projets"/>
                <img src="../../src/assets/img/github.svg" alt="contact"/>
            </div>
        </div>
    )
}

export default HomePage;