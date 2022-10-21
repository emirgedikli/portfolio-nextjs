import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

let styles = {
  LKdiv: "",
  LKdiv1: "flex justify-center pb-4 opacity-75",
  LKdiv2: "",
  LKdiv3: "px-4",
  LKdiv4: "",
};

const Links = () => {
  return (
    <div>
      <div className={styles.LKdiv1}>
        <div className={styles.LKdiv2}>
          <Link
            href="https://github.com/emirgedikli"
            rel="noreferrer"
            target="_blank"
          >
            <a>
              <GitHubIcon sx={{ fontSize: 40 }} />
            </a>
          </Link>
        </div>
        <div className={styles.LKdiv3}>
          <Link
            href="http://www.linkedin.com/in/emirgedikli"
            rel="noreferrer"
            target="_blank"
          >
            <a>
              <LinkedInIcon sx={{ fontSize: 40 }} />
            </a>
          </Link>
        </div>
        <div className={styles.LKdiv4}>
          <a href="tel:0033767245024" rel="noreferrer" target="_blank">
            <WhatsAppIcon sx={{ fontSize: 40 }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Links;
