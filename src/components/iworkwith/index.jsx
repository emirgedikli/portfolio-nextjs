import styles from "@src/components/iworkwith/styles";
import Image from "next/image";
import Html from "@src/assets/img/iworkwithIMG/Html.png";
import Css from "@src/assets/img/iworkwithIMG/Css.png";
import Webpack from "@src/assets/img/iworkwithIMG/Webpack.png";
import Bootstrap from "@src/assets/img/iworkwithIMG/Bootstrap.png";
import Tailwind from "@src/assets/img/iworkwithIMG/Tailwind.png";
import Wordpress from "@src/assets/img/iworkwithIMG/Wordpress.png";
import Reactjs from "@src/assets/img/iworkwithIMG/Reactjs.png";
import Nextjs from "@src/assets/img/iworkwithIMG/Nextjs.png";
import Php from "@src/assets/img/iworkwithIMG/Php.png";
import Sql from "@src/assets/img/iworkwithIMG/Sql.png";
import Nodejs from "@src/assets/img/iworkwithIMG/Nodejs.png";
import Mongodb from "@src/assets/img/iworkwithIMG/Mongodb.png";
import PhpmyAdmin from "@src/assets/img/iworkwithIMG/PhpmyAdmin.png";
import Symfony from "@src/assets/img/iworkwithIMG/Symfony.png";
import Git from "@src/assets/img/iworkwithIMG/Git.png";
import Javascript from "@src/assets/img/iworkwithIMG/Javascript.png";
import Npm from "@src/assets/img/iworkwithIMG/Npm.png";
import Webflow from "@src/assets/img/iworkwithIMG/Webflow.png";

const IworkWith = () => {
  return (
    <section className={styles.section}>
      <div className={styles.iworkwith}>
        <h1>Je travaille avec...</h1>
      </div>
      <div className={styles.div1}>
        {/* lg: left column */}
        <div className={styles.leftColumn}>
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
                <Image src={Wordpress} />
              </span>
              <h3 className={styles.h3}>Wordpress</h3>
              <time className={styles.time}>Depuis septembre 2022</time>
            </li>
            <li className={styles.li}>
              <span className={styles.span}>
                <Image src={Webpack} />
              </span>
              <h3 className={styles.h3}>Webpack</h3>
              <time className={styles.time}>Depuis septembre 2022</time>
            </li>
            <li className={styles.li}>
              <span className={styles.span}>
                <Image src={Nodejs} />
              </span>
              <h3 className={styles.h3}>Node js</h3>
              <time className={styles.time}>Depuis septembre 2022</time>
            </li>
          </ol>
        </div>
        {/* lg: right column */}
        <div className={styles.rightColumn}>
          <ol className={styles.ol}>
            <li className={styles.li}>
              <span className={styles.span}>
                <Image src={Npm} />
              </span>
              <h3 className={styles.h3}>Npm</h3>
              <time className={styles.time}>Depuis octobre 2022</time>
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
              <time className={styles.time}>Depuis octobre 2022</time>
            </li>
            <li className={styles.li}>
              <span className={styles.span}>
                <Image src={Sql} />
              </span>
              <h3 className={styles.h3}>Sql</h3>
              <time className={styles.time}>Depuis octobre 2022</time>
            </li>
            <li className={styles.li}>
              <span className={styles.span}>
                <Image src={Webflow} />
              </span>
              <h3 className={styles.h3}>Webflow</h3>
              <time className={styles.time}>Depuis novembre 2022</time>
            </li>
            <li className={styles.li}>
              <span className={styles.span}>
                <Image src={Symfony} />
              </span>
              <h3 className={styles.h3}>Symfony</h3>
              <time className={styles.time}>Depuis décembre 2022</time>
            </li>
            <li className={styles.li}>
              <span className={styles.span}>
                <Image src={Mongodb} />
              </span>
              <h3 className={styles.h3}>Mongo db</h3>
              <time className={styles.time}>Depuis décembre 2022</time>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default IworkWith;
