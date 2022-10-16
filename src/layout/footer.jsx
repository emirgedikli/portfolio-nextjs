import Links from '@src/layout/Links'

let styles = {
    FTsection: "bg-[#374151] fontNunito text-white opacity-90",
    FTdivA: "px-16 py-4",
    FTdiv1: "flex pt-2 pb-3",
    FTdiv2: "flex pt-2",
    FTdiv2th6: "font-bold pr-2",
    FTdiv3: "flex pt-1",
    FTdiv3th6: "font-bold pr-2",
    FTdiv4: "pt-6"
}

const Footer = () => {
    return (
        // FT section
        <section className={styles.FTsection}>
            {/* FT divA */}
            <div className={styles.FTdivA}>
                {/* FT div1 */}
                <div className={styles.FTdiv1}>
                    <h4>Contactez-moi:</h4>
                </div>
                {/* FT hr */}
                <hr/>
                {/* FT div2 */}
                <div className={styles.FTdiv2}>
                    <h6 className={styles.FTdiv2th6}>Tel:</h6>
                    <a href="tel:+33767245024">+33767245024</a>
                </div>
                {/* FT div3 */}
                <div className={styles.FTdiv3}>
                    <h6 className={styles.FTdiv3th6}>E-mail:</h6>
                    <a href="mailto:emirwtaha@gmail.com" rel ="noreferrer" target="_blank">emirwtaha@gmail.com</a>
                </div>
                {/* FT div4 */}
                <div className={styles.FTdiv4}>
                    <Links />
                </div>
            </div>
        </section>
    )
}

export default Footer;
