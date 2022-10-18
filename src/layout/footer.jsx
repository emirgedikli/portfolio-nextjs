import Links from '@src/layout/Links'

let styles = {
    FTh6: "font-bold pr-2",
}

const Footer = () => {
    return (
        <section class="bg-[#374151] fontNunito text-white opacity-90">
            <div class="px-16 py-4">
                {/* FT div1 */}
                <div class="flex pt-2 pb-3">
                    <h4>Contactez-moi:</h4>
                </div>
                <hr/>
                {/* FT div2 */}
                <div class="flex pt-2">
                    <h6 className={styles.FTh6}>Tel:</h6>
                    <a href="tel:+33767245024">+33767245024</a>
                </div>
                {/* FT div3 */}
                <div class="flex pt-1">
                    <h6 className={styles.FTh6}>E-mail:</h6>
                    <a href="mailto:emirwtaha@gmail.com" rel ="noreferrer" target="_blank">emirwtaha@gmail.com</a>
                </div>
                {/* FT div4 */}
                <div class="pt-6">
                    <Links />
                </div>
            </div>
        </section>
    )
}

export default Footer;
