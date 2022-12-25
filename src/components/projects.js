import Image from "next/image";
import CVonline from "@src/assets/img/projectsIMG/cvonline.png";
import Landingpage from "@src/assets/img/projectsIMG/landingpage.png";
import Mazebank from "@src/assets/img/projectsIMG/mazebank.png";
import Metacode from "@src/assets/img/projectsIMG/metacode.png";
import Portfolio from "@src/assets/img/projectsIMG/portfolio.png";
import Wireframe from "@src/assets/img/projectsIMG/wireframe.png";
import "aos/dist/aos.css";

let styles = {
  section: "lg:ml-36 lg:-mt-20",
  projets:
    "text-center text-white pb-20 text-4xl font-extrabold lg:text-center lg:pb-40 lg:text-6xl",

  blogHaut: "lg:flex lg:justify-around",

  blog1div: "flex justify-center lg:-ml-16",
  blog1div1: "rounded-lg shadow-lg bg-white max-w-sm",
  blog1div1image: "rounded-t-lg",
  blog1div2: "p-6",
  blog1div2h5: "text-gray-900 text-xl font-medium mb-2",
  blog1div2p: "text-gray-700 text-base mb-4",
  blog1div2btn:
    "inline-block px-6 py-2.5 bg-blue-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-800 hover:shadow-lg focus:ring-offset-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-600 active:shadow-lg transition duration-150 ease-in-out",

  blog2div: "flex justify-center mt-20 lg:mt-0",
  blog2div1: "rounded-lg shadow-lg bg-white max-w-sm",
  blog2div1image: "rounded-t-lg",
  blog2div2: "p-6",
  blog2div2h5: "text-gray-900 text-xl font-medium mb-2",
  blog2div2p: "text-gray-700 text-base mb-4",
  blog2div2btn:
    "inline-block px-6 py-2.5 bg-blue-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-800 hover:shadow-lg focus:ring-offset-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-600 active:shadow-lg transition duration-150 ease-in-out lg:mt-6",

  blog3div: "flex justify-center mt-20 lg:mt-0",
  blog3div1: "rounded-lg shadow-lg bg-white max-w-sm",
  blog3div1image: "rounded-t-lg",
  blog3div2: "p-6",
  blog3div2h5: "text-gray-900 text-xl font-medium mb-2",
  blog3div2p: "text-gray-700 text-base mb-4",
  blog3div2btn:
    "inline-block px-6 py-2.5 bg-blue-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-800 hover:shadow-lg focus:ring-offset-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-600 active:shadow-lg transition duration-150 ease-in-out",

  blogBas: "lg:flex lg:justify-around",

  blog4div: "flex justify-center mt-20 lg:-ml-16",
  blog4div1: "rounded-lg shadow-lg bg-white max-w-sm",
  blog4div1image: "rounded-t-lg",
  blog4div2: "p-6",
  blog4div2h5: "text-gray-900 text-xl font-medium mb-2",
  blog4div2p: "text-gray-700 text-base mb-4",
  blog4div2btn:
    "inline-block px-6 py-2.5 bg-blue-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-800 hover:shadow-lg focus:ring-offset-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-600 active:shadow-lg transition duration-150 ease-in-out",

  blog5div: "flex justify-center mt-20",
  blog5div1: "rounded-lg shadow-lg bg-white max-w-sm",
  blog5div1image: "rounded-t-lg",
  blog5div2: "p-6",
  blog5div2h5: "text-gray-900 text-xl font-medium mb-2",
  blog5div2p: "text-gray-700 text-base mb-4",
  blog5div2btn:
    "inline-block px-6 py-2.5 bg-blue-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-800 hover:shadow-lg focus:ring-offset-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-600 active:shadow-lg transition duration-150 ease-in-out",

  blog6div: "flex justify-center mt-20",
  blog6div1: "rounded-lg shadow-lg bg-white max-w-sm",
  blog6div1image: "rounded-t-lg",
  blog6div2: "p-6",
  blog6div2h5: "text-gray-900 text-xl font-medium mb-2",
  blog6div2p: "text-gray-700 text-base mb-4",
  blog6div2btn:
    "inline-block px-6 py-2.5 bg-blue-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-800 hover:shadow-lg focus:ring-offset-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-600 active:shadow-lg transition duration-150 ease-in-out lg:mt-6",
};

const ViewProjects = () => {
  return (
    <section className={styles.section}>
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        data-aos-once="false"
        className={styles.projets}
      >
        <h1>My projects...</h1>
      </div>
      {/* lg: BLOG DU HAUT */}
      <div className={styles.blogHaut}>
        {/* BLOG 1 */}
        <div
          data-aos="zoom-in-up"
          data-aos-once="false"
          className={styles.blog1div}
        >
          <div className={styles.blog1div1}>
            <Image src={Wireframe} className={styles.blog1div1image} />
            <div className={styles.blog1div2}>
              <h5 className={styles.blog1div2h5}>Wireframe</h5>
              <p className={styles.blog1div2p}>
                This project is one of our first experiences. It is a project
                that aims to learn how to prepare a zoning prepare a zoning and
                a wireframe and learn how to put it in put it into code.
              </p>
            </div>
          </div>
        </div>
        {/* BLOG 2 */}
        <div
          data-aos="zoom-in-up"
          data-aos-once="false"
          className={styles.blog2div}
        >
          <div className={styles.blog2div1}>
            <Image src={Landingpage} className={styles.blog2div1image} />
            <div className={styles.blog2div2}>
              <h5 className={styles.blog2div2h5}>Landing Page</h5>
              <p className={styles.blog2div2p}>
                The goal of this project is to learn how to code the homepage of
                a website in a responsive way.
              </p>
            </div>
          </div>
        </div>
        {/* BLOG 3 */}
        <div
          data-aos="zoom-in-up"
          data-aos-once="false"
          className={styles.blog3div}
        >
          <div className={styles.blog3div1}>
            <Image src={Metacode} className={styles.blog3div1image} />
            <div className={styles.blog3div2}>
              <h5 className={styles.blog3div2h5}>Metacode</h5>
              <p className={styles.blog3div2p}>
                This project is a team effort. It is prepared to learn how to
                build and manage a web agency, how to delegate tasks on github
                and how to do git merge etc.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* lg: BLOG DU BAS */}
      <div className={styles.blogBas}>
        {/* BLOG 4 */}
        <div
          data-aos="zoom-in-up"
          data-aos-once="false"
          className={styles.blog4div}
        >
          <div className={styles.blog4div1}>
            <Image src={Mazebank} className={styles.blog4div1image} />
            <div className={styles.blog4div2}>
              <h5 className={styles.blog4div2h5}>Maze bank</h5>
              <p className={styles.blog4div2p}>
                It is an encrypted bank account system for creating deposit and
                withdrawal transactions. It is coded with html, css and
                javascript.
              </p>
            </div>
          </div>
        </div>
        {/* BLOG 5 */}
        <div
          data-aos="zoom-in-up"
          data-aos-once="false"
          className={styles.blog5div}
        >
          <div className={styles.blog5div1}>
            <Image src={Portfolio} className={styles.blog5div1image} />
            <div className={styles.blog5div2}>
              <h5 className={styles.blog5div2h5}>Portfolio</h5>
              <p className={styles.blog5div2p}>
                This project is a Next.js project. React.js is also used. It is
                an individual work to learn how to use a framework.
              </p>
            </div>
          </div>
        </div>
        {/* BLOG 6 */}
        <div
          data-aos="zoom-in-up"
          data-aos-once="false"
          className={styles.blog6div}
        >
          <div className={styles.blog6div1}>
            <Image src={CVonline} className={styles.blog6div1image} />
            <div className={styles.blog6div2}>
              <h5 className={styles.blog6div2h5}>CV</h5>
              <p className={styles.blog6div2p}>
                This project is coded in vanilla. It contains only html and css.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewProjects;
