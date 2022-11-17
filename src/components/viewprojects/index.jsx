import styles from "@src/components/viewprojects/styles";
import Image from "next/image";
import CVonline from "@src/assets/img/viewprojectsIMG/cvonline.png";
import Landingpage from "@src/assets/img/viewprojectsIMG/landingpage.png";
import Mazebank from "@src/assets/img/viewprojectsIMG/mazebank.png";
import Metacode from "@src/assets/img/viewprojectsIMG/metacode.png";
import Portfolio from "@src/assets/img/viewprojectsIMG/portfolio.png";
import Wireframe from "@src/assets/img/viewprojectsIMG/wireframe.png";

const ViewProjects = () => {
  return (
    <section className={styles.section}>
      <div data-aos="fade-right" className={styles.projets}>
        <h1>Mes projets...</h1>
      </div>
      {/* lg: BLOG DU HAUT */}
      <div className={styles.blogHaut}>
        {/* BLOG 1 */}
        <div class={styles.blog1div}>
          <div class={styles.blog1div1}>
            <Image src={Wireframe} className={styles.blog1div1image} />
            <div class={styles.blog1div2}>
              <h5 class={styles.blog1div2h5}>Wireframe</h5>
              <p class={styles.blog1div2p}>
                Ce projet est l&apos;une de nos premières expériences. Il
                s&apos;agit d&apos;un projet qui vise à apprendre comment
                préparer un zoning et un wireframe et à apprendre comment le
                mettre en code.
              </p>
              <a
                href="https://int-wireframe.netlify.app/"
                rel="noreferrer"
                target="_blank"
              >
                <button type="button" className={styles.blog1div2btn}>
                  Visitez
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* BLOG 2 */}
        <div className={styles.blog2div}>
          <div className={styles.blog2div1}>
            <Image src={Landingpage} className={styles.blog2div1image} />
            <div className={styles.blog2div2}>
              <h5 className={styles.blog2div2h5}>Landing Page</h5>
              <p className={styles.blog2div2p}>
                Ce projet a pour but d&apos;apprendre à coder la page
                d&apos;accueil d&apos;un site Web de manière responsive.
              </p>
              <a
                href="https://int-landing-page.netlify.app/"
                rel="noreferrer"
                target="_blank"
              >
                <button type="button" className={styles.blog2div2btn}>
                  Visitez
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* BLOG 3 */}
        <div className={styles.blog3div}>
          <div className={styles.blog3div1}>
            <Image src={Metacode} className={styles.blog3div1image} />
            <div className={styles.blog3div2}>
              <h5 className={styles.blog3div2h5}>Metacode</h5>
              <p className={styles.blog3div2p}>
                Ce projet est une travail d&apos;équipe. Il est préparée pour
                apprendre comment construire et gérer une agence web, comment
                déléguer des tâches sur github et comment faire les git merge
                etc.
              </p>
              <a
                href="https://meta-code.netlify.app/"
                rel="noreferrer"
                target="_blank"
              >
                <button type="button" className={styles.blog3div2btn}>
                  Visitez
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* lg: BLOG DU BAS */}
      <div className={styles.blogBas}>
        {/* BLOG 4 */}
        <div className={styles.blog4div}>
          <div className={styles.blog4div1}>
            <Image src={Mazebank} className={styles.blog4div1image} />
            <div className={styles.blog4div2}>
              <h5 className={styles.blog4div2h5}>Maze bank</h5>
              <p className={styles.blog4div2p}>
                Il s&apos;agit d&apos;un système de compte bancaire codé pour
                créer des transactions de dépôt et de retrait. Il est codé avec
                html, css et javascript.
              </p>
              <a
                href="https://sb-mazebank.netlify.app/"
                rel="noreferrer"
                target="_blank"
              >
                <button type="button" className={styles.blog4div2btn}>
                  Visitez
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* BLOG 5 */}
        <div className={styles.blog5div}>
          <div className={styles.blog5div1}>
            <Image src={Portfolio} className={styles.blog5div1image} />
            <div className={styles.blog5div2}>
              <h5 className={styles.blog5div2h5}>Portfolio</h5>
              <p className={styles.blog5div2p}>
                Ce projet est un projet Next.js. React.js y est également
                utilisé. Il s&apos;agit d&apos;un travail individuel visant à
                apprendre à utiliser un framework.
              </p>
              <a
                href="https://gedikli-portfolio.netlify.app/"
                rel="noreferrer"
                target="_blank"
              >
                <button type="button" className={styles.blog5div2btn}>
                  Visitez
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* BLOG 6 */}
        <div className={styles.blog6div}>
          <div className={styles.blog6div1}>
            <Image src={CVonline} className={styles.blog6div1image} />
            <div className={styles.blog6div2}>
              <h5 className={styles.blog6div2h5}>CV</h5>
              <p className={styles.blog6div2p}>
                Ce projet est codé en vanilla. Il ne contient que du html et du
                css.
              </p>
              <a
                href="https://cv-emir.netlify.app/"
                rel="noreferrer"
                target="_blank"
              >
                <button type="button" className={styles.blog6div2btn}>
                  Visitez
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewProjects;
