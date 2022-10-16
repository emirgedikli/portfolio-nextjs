let styles = {
    MSsection: "py-12",
    MSdiv: "",
    MSdiv1: "",
    MSdiv2: "font-bold text-white text-center text-4xl opacity-70",
    MSdiv3: "",
}

let MyWorks = () => {
    return (
        // MS section
        <section className={styles.MSsection}>
            {/* MS div */}
            <div className={styles.MSdiv}>
                {/* MS div1 */}
                <div className={styles.MSdiv1}>

                </div>
                {/* MS div 2 */}
                <div className={styles.MSdiv2}>
                    <h1>Je travail avec...</h1>
                </div>
                {/* MS div3 */}
                <div className={styles.MSdiv3}>

                </div>
            </div>
        </section>
    )
}

export default MyWorks;
