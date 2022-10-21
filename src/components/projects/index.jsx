import Link from "next/link";
import Image from "next/image";
import MazeBank from "@src/assets/img/MazeBank.png";
import MetaCode from "@src/assets/img/MetaCode.png";
import Wireframe from "@src/assets/img/Wireframe.png";

let styles = {
  MPImages: "block w-full flex justify-center",
  MPdiv: "",
  MPdiv1: "",
  MPdiv2: "",
  MPdiv3: "",
};

const Projects = () => {
  return (
    // MP div
    <div
      id="carouselExampleCrossfade"
      class="carousel slide carousel-fade relative"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        <button
          type="button"
          data-bs-target="#carouselExampleCrossfade"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCrossfade"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCrossfade"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner relative w-full overflow-hidden">
        <div class="carousel-item active float-left w-full">
          <div className={styles.MPImages}>
            <Link href={"https://blue-mazebank.netlify.app/"}>
              <Image
                src={MazeBank}
                height={800}
                width={1400}
                title="cliquez pour accéder à la page"
              />
            </Link>
          </div>
        </div>
        <div class="carousel-item float-left w-full">
          <div className={styles.MPImages}>
            <Link href={"https://meta-code.netlify.app/"}>
              <Image
                src={MetaCode}
                height={800}
                width={1400}
                title="cliquez pour accéder à la page"
              />
            </Link>
          </div>
        </div>
        <div class="carousel-item float-left w-full">
          <div className={styles.MPImages}>
            <Link href={"https://integration-wireframe.netlify.app/"}>
              <Image
                src={Wireframe}
                height={800}
                width={1400}
                title="cliquez pour accéder à la page"
              />
            </Link>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleCrossfade"
        data-bs-slide="prev"
      >
        <span
          class="carousel-control-prev-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleCrossfade"
        data-bs-slide="next"
      >
        <span
          class="carousel-control-next-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Projects;
