let styles = {
    VWdiv1aCV: "uppercase text-white text-center text-xs font-semibold py-2 px-8 w-screen rounded border border-cyan-500 hover:border-transparent hover:bg-cyan-500 hover:text-white dark:text-gray-400 dark:hover:text-white",
}

let ViewCv = () => {
    return (
        // VW section
        <section>
            {/* VW div 1 */}
            <div className={styles.WC}>
                <a href="https://cv-emir.netlify.app/" rel ="noreferrer" target="_blank" className={styles.VWdiv1aCV}>Voir CV</a>
            </div>
        </section>
    )
}


export default ViewCv;
