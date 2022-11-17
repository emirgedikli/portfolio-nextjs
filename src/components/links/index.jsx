import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";

let styles = {
  section: "flex justify-center text-white pb-4 opacity-75 lg:py-12",
  pr: "pr-4",
  px: "px-4",
};

const Links = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.pr}>
          <a
            href="https://github.com/emirgedikli"
            rel="noreferrer"
            target="_blank"
          >
            <GitHubIcon sx={{ fontSize: 40 }} />
          </a>
        </div>
        <div>
          <a
            href="http://www.linkedin.com/in/emirgedikli"
            rel="noreferrer"
            target="_blank"
          >
            <LinkedInIcon sx={{ fontSize: 40 }} />
          </a>
        </div>
        <div className={styles.px}>
          <a href="tel:0033767245024">
            <WhatsAppIcon sx={{ fontSize: 40 }} />
          </a>
        </div>
        <div>
          <a
            href="https://twitter.com/byemirgedikli"
            rel="noreferrer"
            target="_blank"
          >
            <TwitterIcon sx={{ fontSize: 40 }} />
          </a>
        </div>
      </section>
    </>
  );
};

export default Links;
