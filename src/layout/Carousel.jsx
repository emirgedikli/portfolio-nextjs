import Image from 'next/image';
import Html from '@src/assets/img/Html.png';
import Css from '@src/assets/img/Css.png';
import Javascript from '@src/assets/img/Javascript.png';
import Webpack from '@src/assets/img/Webpack.png';
import Bootstrap from '@src/assets/img/Bootstrap.png';
import Tailwind from '@src/assets/img/Tailwind.png';
import Wordpress from '@src/assets/img/Wordpress.png';
import Reactjs from '@src/assets/img/Reactjs.png';
import Nextjs from '@src/assets/img/Nextjs.png';
import Php from '@src/assets/img/Php.png';
import Sql from '@src/assets/img/Sql.png';
import Nodejs from '@src/assets/img/Nodejs.png';

let styles = {
    CLsection: "",
    CLdiv: "carousel slide relative",
    CLdiv1: "flex justify-center carousel-inner relative w-full overflow-hidden",
    CLdiv1A: "bg-[#374151] rounded-full my-10 p-8 w-48 h-48 carousel-item active relative float-left",
    CLdiv1B: "bg-[#374151] rounded-full my-10 p-8 w-48 h-48 carousel-item relative float-left",
    CLdiv1C: "bg-[#374151] rounded-full my-10 p-8 w-48 h-48 carousel-item active relative float-left",
    CLdiv1D: "bg-[#374151] rounded-full my-10 p-8 w-48 h-48 carousel-item relative float-left",
    CLdiv1E: "bg-[#374151] rounded-full my-10 p-8 w-48 h-48 carousel-item active relative float-left",
    CLdiv1F: "bg-[#374151] rounded-full my-10 p-8 w-48 h-48 carousel-item relative float-left",
    CLdiv1G: "bg-[#374151] rounded-full my-10 p-8 w-48 h-48 carousel-item active relative float-left",
    CLdiv1L: "bg-[#374151] rounded-full my-10 p-8 w-48 h-48 carousel-item relative float-left",
    CLdiv1M: "bg-[#374151] rounded-full my-10 p-8 w-48 h-48 carousel-item active relative float-left",
    CLdiv1N: "bg-[#374151] rounded-full my-10 p-8 w-48 h-48 carousel-item relative float-left",
    CLdiv1O: "bg-[#374151] rounded-full my-10 p-8 w-48 h-48 carousel-item active relative float-left",
    CLdiv1P: "bg-[#374151] rounded-full my-10 p-8 w-48 h-48 carousel-item relative float-left",
    CLImage: "flex justify-center py-6 block w-full block w-full",
    CLdiv1divAdivh3: "flex justify-center uppercase text-white opacity-50",
}

let Carousel = () => {
    return (
        // CL section
        <section className={styles.CLsection}>
            {/* CL div */}
            <div className={styles.CLdiv} id="carouselExampleSlidesOnly" data-bs-ride="carousel">
                {/* CL div 1 */}
                <div id='skills' className={styles.CLdiv1}>
                    <div className={styles.CLdiv1A}>
                        <div className={styles.CLImage}>
                            <Image src={Html} alt="Html" height={50} width={50} />
                        </div>
                        <div className={styles.CLdiv1divAdivh3}>
                            <h3>Html</h3>
                        </div>
                    </div>
                    <div className={styles.CLdiv1B}>
                        <div className={styles.CLImage}>
                            <Image src={Css} alt="Css" height={50} width={50} />
                        </div>
                        <div className={styles.CLdiv1divAdivh3}>
                            <h3>Css</h3>
                        </div>
                    </div>
                    <div className={styles.CLdiv1C}>
                        <div className={styles.CLImage}>
                            <Image src={Javascript} alt="Javascript" height={50} width={50} />
                        </div>
                        <div className={styles.CLdiv1divAdivh3}>
                            <h3>Javascript</h3>
                        </div>
                    </div>
                    <div className={styles.CLdiv1D}>
                        <div className={styles.CLImage}>
                            <Image src={Webpack} alt="Webpack" height={50} width={50} />
                        </div>
                        <div className={styles.CLdiv1divAdivh3}>
                            <h3>Webpack</h3>
                        </div>
                    </div>
                    <div className={styles.CLdiv1E}>
                        <div className={styles.CLImage}>
                            <Image src={Bootstrap} alt="Bootstrap" height={50} width={50} />
                        </div>
                        <div className={styles.CLdiv1divAdivh3}>
                            <h3>Bootstrap</h3>
                        </div>
                    </div>
                    <div className={styles.CLdiv1F}>
                        <div className={styles.CLImage}>
                            <Image src={Tailwind} alt="Tailwind" height={50} width={50} />
                        </div>
                        <div className={styles.CLdiv1divAdivh3}>
                            <h3>Tailwind</h3>
                        </div>
                    </div>
                    <div className={styles.CLdiv1G}>
                        <div className={styles.CLImage}>
                            <Image src={Wordpress} alt="Wordpress" height={50} width={50} />
                        </div>
                        <div className={styles.CLdiv1divAdivh3}>
                            <h3>Wordpress</h3>
                        </div>
                    </div>
                    <div className={styles.CLdiv1L}>
                        <div className={styles.CLImage}>
                            <Image src={Reactjs} alt="Reactjs" height={50} width={50} />
                        </div>
                        <div className={styles.CLdiv1divAdivh3}>
                            <h3>Reactjs</h3>
                        </div>
                    </div>
                    <div className={styles.CLdiv1M}>
                        <div className={styles.CLImage}>
                            <Image src={Nextjs} alt="Nextjs" height={50} width={50} />
                        </div>
                        <div className={styles.CLdiv1divAdivh3}>
                            <h3>Nextjs</h3>
                        </div>
                    </div>
                    <div className={styles.CLdiv1N}>
                        <div className={styles.CLImage}>
                            <Image src={Php} alt="Php" height={50} width={50} />
                        </div>
                        <div className={styles.CLdiv1divAdivh3}>
                            <h3>Php</h3>
                        </div>
                    </div>
                    <div className={styles.CLdiv1O}>
                        <div className={styles.CLImage}>
                            <Image src={Sql} alt="Sql" height={50} width={50} />
                        </div>
                        <div className={styles.CLdiv1divAdivh3}>
                            <h3>Sql</h3>
                        </div>
                    </div>
                    <div className={styles.CLdiv1P}>
                        <div className={styles.CLImage}>
                            <Image src={Nodejs} alt="Nodejs" height={50} width={50} />
                        </div>
                        <div className={styles.CLdiv1divAdivh3}>
                            <h3>Nodejs</h3>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div id="carouselExampleSlidesOnly" class="carousel slide relative" data-bs-ride="carousel">
                <div class="carousel-inner relative w-full overflow-hidden">
                    <div class="carousel-item active relative float-left w-full">
                        <Image src={Css} alt="Css" height={50} width={50} />
                    </div>
                    <div class="carousel-item relative float-left w-full">
                        <Image src={Html} alt="Html" height={50} width={50} />
                    </div>
                    <div class="carousel-item relative float-left w-full">
                        <Image src={Javascript} alt="Javascript" height={50} width={50} />
                    </div>
                </div>
            </div> */}
        </section>
    )
}

export default Carousel;
