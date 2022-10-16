import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

let styles = {
    Ldiv1: "flex justify-center pb-4 opacity-75",
    Ldiv3: "px-4",
}

let Links = () => {
    return (
            <div>
                <div className={styles.Ldiv1}>
                    <div>
                        <a href="https://github.com/emirgedikli" rel ="noreferrer" target="_blank"><GitHubIcon sx={{ fontSize: 40 }} /></a>
                    </div>
                    <div className={styles.Ldiv3}>
                        <a href="http://www.linkedin.com/in/emirgedikli" rel ="noreferrer" target="_blank"><LinkedInIcon sx={{ fontSize: 40 }} /></a>
                    </div>
                    <div>
                        <a href="tel:0033767245024" rel ="noreferrer" target="_blank"><WhatsAppIcon sx={{ fontSize: 40 }} /></a>
                    </div>
                </div>
            </div>
    )
}

export default Links;
