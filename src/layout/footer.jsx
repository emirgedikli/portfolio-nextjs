import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';

let styles = {
    FTsection: "bg-[#374151] fontNunito text-white opacity-90",
    FTdivA: "px-16 py-4",
    FTdiv1: "flex pt-2 pb-3",
    FTdiv2: "flex pt-2",
    FTdiv2th6: "font-bold pr-2",
    FTdiv3: "flex pt-1",
    FTdiv3th6: "font-bold pr-2",
    FTdivB: "",
    FTdiv4: "flex justify-center pb-4 opacity-75",
    FTdiv5: "",
    FTdiv6: "px-4",
    FTdiv7: "",
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
                    <a href="mailto:emirwtaha@gmail.com">emirwtaha@gmail.com</a>
                </div>
            </div>
            {/* FT divB */}
            <div>
                {/* FT div 4 */}
                <div className={styles.FTdiv4}>
                    {/* FT div 5 */}
                    <div className={styles.FTdiv5}>
                        <a href="https://github.com/emirgedikli"><GitHubIcon sx={{ fontSize: 40 }} /></a>
                    </div>
                    {/* FT div 6 */}
                    <div className={styles.FTdiv6}>
                        <a href="#"><LinkIcon sx={{ fontSize: 40 }} /></a>
                    </div>
                    {/* FT div 7 */}
                    <div className={styles.FTdiv7}>
                        <a href="http://www.linkedin.com/in/emirgedikli"><LinkedInIcon sx={{ fontSize: 40 }} /></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;
