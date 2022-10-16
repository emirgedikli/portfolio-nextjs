import Links from '@src/layout/Links'

let styles = {
    VWdiv1aCV: "flex justify-center w-full uppercase text-white text-center text-xs font-semibold py-2 px-8 w-screen rounded border border-cyan-500 hover:border-transparent hover:bg-cyan-500 hover:text-white dark:text-gray-400 dark:hover:text-white",
    VWdiv2: "pt-6 text-white"
}

let ViewCv = () => {
    return (
        // VW section
        <section>
            {/* VW div 1 */}
            <div className={styles.WC}>
                <a href="https://cv-emir.netlify.app/" rel ="noreferrer" target="_blank" className={styles.VWdiv1aCV}>Voir CV</a>
            </div>
            {/* VW div 2 */}
            <div className={styles.VWdiv2}>
                <Links />
            </div>
        </section>
    )
}


export default ViewCv;
