import Image from "next/image";
import CVonline from "@src/assets/img/viewprojectsIMG/cvonline.png";
import Landingpage from "@src/assets/img/viewprojectsIMG/landingpage.png";
import Mazebank from "@src/assets/img/viewprojectsIMG/mazebank.png";
import Metacode from "@src/assets/img/viewprojectsIMG/metacode.png";
import Portfolio from "@src/assets/img/viewprojectsIMG/portfolio.png";
import Wireframe from "@src/assets/img/viewprojectsIMG/wireframe.png";

let styles = {
  section: "lg:ml-36 lg:-mt-20",
  projets:
    "text-start text-white pb-20 text-4xl font-extrabold lg:text-center lg:pb-40 lg:text-6xl",
};

const ViewProjects = () => {
  return (
    <section className={styles.section}>
      <div className={styles.projets}>
        <h1>Mes projets...</h1>
      </div>
      {/* lg: BLOG DU HAUT */}
      <div className="lg:flex lg:justify-around">
        {/* BLOG 1 */}
        <div class="flex justify-center">
          <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <Image src={Wireframe} class="rounded-t-lg" />
            <div class="p-6">
              <h5 class="text-gray-900 text-xl font-medium mb-2">Wireframe</h5>
              <p class="text-gray-700 text-base mb-4">
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
                <button
                  type="button"
                  class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Visitez
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* BLOG 2 */}
        <div class="flex justify-center">
          <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <Image src={Landingpage} class="rounded-t-lg" />
            <div class="p-6">
              <h5 class="text-gray-900 text-xl font-medium mb-2">
                Landing Page
              </h5>
              <p class="text-gray-700 text-base mb-4">
                Ce projet a pour but d&apos;apprendre à coder la page
                d&apos;accueil d&apos;un site Web de manière responsive.
              </p>
              <a
                href="https://int-landing-page.netlify.app/"
                rel="noreferrer"
                target="_blank"
              >
                <button
                  type="button"
                  class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Visitez
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* BLOG 3 */}
        <div class="flex justify-center">
          <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <Image src={Metacode} class="rounded-t-lg" />
            <div class="p-6">
              <h5 class="text-gray-900 text-xl font-medium mb-2">Metacode</h5>
              <p class="text-gray-700 text-base mb-4">
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
                <button
                  type="button"
                  class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Visitez
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* lg: BLOG DU BAS */}
      <div className="lg:flex lg:justify-around">
        {/* BLOG 3 */}
        <div class="flex justify-center mt-20">
          <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <Image src={Mazebank} class="rounded-t-lg" />
            <div class="p-6">
              <h5 class="text-gray-900 text-xl font-medium mb-2">Maze bank</h5>
              <p class="text-gray-700 text-base mb-4">
                Il s&apos;agit d&apos;un système de compte bancaire codé pour
                créer des transactions de dépôt et de retrait. Il est codé avec
                html, css et javascript.
              </p>
              <a
                href="https://sb-mazebank.netlify.app/"
                rel="noreferrer"
                target="_blank"
              >
                <button
                  type="button"
                  class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Visitez
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* BLOG 4 */}
        <div class="flex justify-center mt-20">
          <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <Image src={Portfolio} class="rounded-t-lg" />
            <div class="p-6">
              <h5 class="text-gray-900 text-xl font-medium mb-2">Portfolio</h5>
              <p class="text-gray-700 text-base mb-4">
                Ce projet est un projet Next.js. React.js y est également
                utilisé. Il s&apos;agit d&apos;un travail individuel visant à
                apprendre à utiliser un framework.
              </p>
              <a
                href="https://gedikli-portfolio.netlify.app/"
                rel="noreferrer"
                target="_blank"
              >
                <button
                  type="button"
                  class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Visitez
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* BLOG 6 */}
        <div class="flex justify-center mt-20">
          <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <Image src={CVonline} class="rounded-t-lg" />
            <div class="p-6">
              <h5 class="text-gray-900 text-xl font-medium mb-2">CV</h5>
              <p class="text-gray-700 text-base mb-4">
                Ce projet est codé en vanilla. Il ne contient que du html et du
                css.
              </p>
              <a
                href="https://cv-emir.netlify.app/"
                rel="noreferrer"
                target="_blank"
              >
                <button
                  type="button"
                  class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
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
