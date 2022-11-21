import Image from "next/image";
import Html from "@assets/img/skillsIMG/Html.png";
import Css from "@assets/img/skillsIMG/Css.png";
import Webpack from "@assets/img/skillsIMG/Webpack.png";
import Bootstrap from "@assets/img/skillsIMG/Bootstrap.png";
import Tailwind from "@assets/img/skillsIMG/Tailwind.png";
import Wordpress from "@assets/img/skillsIMG/Wordpress.png";
import Reactjs from "@assets/img/skillsIMG/Reactjs.png";
import Nextjs from "@assets/img/skillsIMG/Nextjs.png";
import Php from "@assets/img/skillsIMG/Php.png";
import Sql from "@assets/img/skillsIMG/Sql.png";
import Nodejs from "@assets/img/skillsIMG/Nodejs.png";
import Mongodb from "@assets/img/skillsIMG/Mongodb.png";
import PhpmyAdmin from "@assets/img/skillsIMG/PhpmyAdmin.png";
import Symfony from "@assets/img/skillsIMG/Symfony.png";
import Git from "@assets/img/skillsIMG/Git.png";
import Javascript from "@assets/img/skillsIMG/Javascript.png";
import Npm from "@assets/img/skillsIMG/Npm.png";
import Webflow from "@assets/img/skillsIMG/Webflow.png";
import "aos/dist/aos.css";

let styles = {
  section: "lg:ml-24 lg:-mt-20",
  div1: "lg:grid lg:grid-cols-2",
  leftColumn: "lg:-ml-20",
  iworkwith:
    "text-center text-white pb-20 text-4xl font-extrabold lg:text-center lg:pb-40 lg:text-6xl",
  rightColumn: "lg:ml-20",
  ol: "relative border-l border-gray-200 dark:border-gray-700",
  li: "mb-10 ml-6 lg:mb-28 lg:ml-6",
  span: "animate__pulse infinite flex absolute -left-3 justify-center items-center w-6 h-6 rounded-full ring-8 ring-white dark:ring-gray-900 bg-gray-300 lg:w-32 lg:h-32 lg:p-6",
  h3: "uppercase mb-2 pl-2 text-lg font-semibold text-white lg:text-3xl lg:pl-40 lg:pt-6",
  time: "block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 lg:pl-40 lg:pt-4",
};

const IworkWith = () => {
  return (
    <section className={styles.section}>
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        data-aos-once="false"
        className={styles.iworkwith}
      >
        <h1>Je travaille avec...</h1>
      </div>
      <div className={styles.div1}>
        {/* lg: left column */}
        <div
          data-aos="zoom-in"
          data-aos-once="false"
          className={styles.leftColumn}
        >
          <ol className={styles.ol}>
            <li className={styles.li}>
              <span className={styles.span}>
                <Image src={Html} />
              </span>
              <h3 className={styles.h3}>Html</h3>
              <time className={styles.time}>Depuis avril 2022</time>
            </li>
            <li className={styles.li}>
              <span className={styles.span}>
                <Image src={Css} />
              </span>
              <h3 className={styles.h3}>Css</h3>
              <time className={styles.time}>Depuis mai 2022</time>
            </li>
            <li className={styles.li}>
              <span className={styles.span}>
                <Image src={Git} />
              </span>
              <h3 className={styles.h3}>Git</h3>
              <time className={styles.time}>Depuis juin 2022</time>
            </li>
            <li className={styles.li}>
              <span className={styles.span}>
                <Image src={Tailwind} />
              </span>
              <h3 className={styles.h3}>Tailwind</h3>
              <time className={styles.time}>Depuis juillet 2022</time>
            </li>
            <li className={styles.li}>
              <span className={styles.span}>
                <Image src={Bootstrap} />
              </span>
              <h3 className={styles.h3}>Bootstrap</h3>
              <time className={styles.time}>Depuis juillet 2022</time>
            </li>
            <li className={styles.li}>
              <span className={styles.span}>
                <Image src={Javascript} />
              </span>
              <h3 className={styles.h3}>Javascript</h3>
              <time className={styles.time}>Depuis août 2022</time>
            </li>
            <li className={styles.li}>
              <span className={styles.span}>
                <Image src={Webpack} />
              </span>
              <h3 className={styles.h3}>Webpack</h3>
              <time className={styles.time}>Depuis août 2022</time>
            </li>
            <li className={styles.li}>
              <span className={styles.span}>
                <Image src={Wordpress} />
              </span>
              <h3 className={styles.h3}>Wordpress</h3>
              <time className={styles.time}>Depuis septembre 2022</time>
            </li>
          </ol>
        </div>
        {/* lg: right column */}
        <div
          data-aos="zoom-in"
          data-aos-once="false"
          className={styles.rightColumn}
        >
          <ol className={styles.ol}>
            <li className={styles.li}>
              <span className={styles.span}>
                <Image src={Nodejs} />
              </span>
              <h3 className={styles.h3}>Node js</h3>
              <time className={styles.time}>Depuis septembre 2022</time>
            </li>
            <li className={styles.li}>
              <span className={styles.span}>
                <Image src={Npm} />
              </span>
              <h3 className={styles.h3}>Npm</h3>
              <time className={styles.time}>Depuis septembre 2022</time>
            </li>
            <li className={styles.li}>
              <span className={styles.span}>
                <Image src={Nextjs} />
              </span>
              <h3 className={styles.h3}>Next js</h3>
              <time className={styles.time}>Depuis octobre 2022</time>
            </li>
            <li className={styles.li}>
              <span className={styles.span}>
                <Image src={Reactjs} />
              </span>
              <h3 className={styles.h3}>React js</h3>
              <time className={styles.time}>Depuis octobre 2022</time>
            </li>
            <li className={styles.li}>
              <span className={styles.span}>
                <Image src={Php} />
              </span>
              <h3 className={styles.h3}>Php</h3>
              <time className={styles.time}>Depuis octobre 2022</time>
            </li>
            <li className={styles.li}>
              <span className={styles.span}>
                <Image src={PhpmyAdmin} />
              </span>
              <h3 className={styles.h3}>Php My Admin</h3>
              <time className={styles.time}>Depuis novembre 2022</time>
            </li>
            <li className={styles.li}>
              <span className={styles.span}>
                <Image src={Sql} />
              </span>
              <h3 className={styles.h3}>Sql</h3>
              <time className={styles.time}>Depuis novembre 2022</time>
            </li>
            <li className={styles.li}>
              <span className={styles.span}>
                <Image src={Webflow} />
              </span>
              <h3 className={styles.h3}>Webflow</h3>
              <time className={styles.time}>Depuis décembre 2022</time>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default IworkWith;
