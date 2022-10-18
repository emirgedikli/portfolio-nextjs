import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

let styles = {
    LKdiv: "",
    LKdiv1: "flex justify-center pb-4 opacity-75",
    LKdiv2: "",
    LKdiv3: "px-4",
    LKdiv4: "",
}

let Links = () => {
    return (
            // LK div
            <div>
                {/* LK div 1 */}
                <div className={styles.LKdiv1}>
                    {/* LK div 2 */}
                    <div>
                        <a href="https://github.com/emirgedikli" rel ="noreferrer" target="_blank"><GitHubIcon sx={{ fontSize: 40 }} /></a>
                    </div>
                    {/* LK div 3 */}
                    <div className={styles.LKdiv3}>
                        <a href="http://www.linkedin.com/in/emirgedikli" rel ="noreferrer" target="_blank"><LinkedInIcon sx={{ fontSize: 40 }} /></a>
                    </div>
                    {/* LK div 4 */}
                    <div className={styles.LKdiv4}>
                        <a href="tel:0033767245024" rel ="noreferrer" target="_blank"><WhatsAppIcon sx={{ fontSize: 40 }} /></a>
                    </div>
                </div>
            </div>
    )
}

export default Links;
