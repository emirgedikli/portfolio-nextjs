import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

let styles = {
  section: "flex justify-center pb-4 opacity-75",
  div2: "px-4",
};

const Links = () => {
  return (
    <>
      <section className={styles.section}>
        <div>
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
        <div className={styles.div2}>
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
        <div>
          <a href="tel:0033767245024" rel="noreferrer" target="_blank">
            <WhatsAppIcon sx={{ fontSize: 40 }} />
          </a>
        </div>
      </section>
    </>
  );
};

export default Links;
