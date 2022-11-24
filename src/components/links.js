import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "aos/dist/aos.css";

let styles = {
  section: "flex justify-center text-white pb-4 opacity-75 lg:py-12",
  pr: "pr-4",
  px: "px-4",
};

const Links = () => {
  return (
    <>
      <section
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        data-aos-once="false"
        className={styles.section}
      >
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
      </section>
    </>
  );
};

export default Links;
