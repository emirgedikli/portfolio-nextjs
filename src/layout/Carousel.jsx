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
    CLImage: "flex justify-center py-6",
    CLskills: "flex justify-center uppercase text-white opacity-50",
}

let Carousel = () => {
    return (
        <section class="flex justify-center">
            <div id="carouselExampleSlidesOnly" class="carousel slide relative" data-bs-ride="carousel">
                <div class="carousel-inner relative w-full overflow-hidden">
                    <div class="carousel-item active relative float-left w-full">
                        <div class="bg-[#374151] rounded-full my-10 p-8 w-48 h-48">
                            <div className={styles.CLImage}>
                                <Image src={Html} alt="Html" height={50} width={50}/>
                            </div>
                            <div>
                                <h3 className={styles.CLskills}>Html</h3>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item relative float-left w-full">
                        <div class="bg-[#374151] rounded-full my-10 p-8 w-48 h-48">
                            <div className={styles.CLImage}>
                                <Image src={Css} alt="Css" height={50} width={50}/>
                            </div>
                            <div>
                                <h3 className={styles.CLskills}>Css</h3>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item relative float-left w-full">
                        <div class="bg-[#374151] rounded-full my-10 p-8 w-48 h-48">
                            <div className={styles.CLImage}>
                                <Image src={Javascript} alt="Javascript" height={50} width={50}/>
                            </div>
                            <div>
                                <h3 className={styles.CLskills}>Javascript</h3>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item relative float-left w-full">
                        <div class="bg-[#374151] rounded-full my-10 p-8 w-48 h-48">
                            <div className={styles.CLImage}>
                                <Image src={Webpack} alt="Webpack" height={50} width={50}/>
                            </div>
                            <div>
                                <h3 className={styles.CLskills}>Webpack</h3>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item relative float-left w-full">
                        <div class="bg-[#374151] rounded-full my-10 p-8 w-48 h-48">
                            <div className={styles.CLImage}>
                                <Image src={Bootstrap} alt="Bootstrap" height={50} width={50}/>
                            </div>
                            <div>
                                <h3 className={styles.CLskills}>Bootstrap</h3>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item relative float-left w-full">
                        <div class="bg-[#374151] rounded-full my-10 p-8 w-48 h-48">
                            <div className={styles.CLImage}>
                                <Image src={Tailwind} alt="Tailwind" height={50} width={50}/>
                            </div>
                            <div>
                                <h3 className={styles.CLskills}>Tailwind</h3>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item relative float-left w-full">
                        <div class="bg-[#374151] rounded-full my-10 p-8 w-48 h-48">
                            <div className={styles.CLImage}>
                                <Image src={Wordpress} alt="Wordpress" height={50} width={50}/>
                            </div>
                            <div>
                                <h3 className={styles.CLskills}>Wordpress</h3>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item relative float-left w-full">
                        <div class="bg-[#374151] rounded-full my-10 p-8 w-48 h-48">
                            <div className={styles.CLImage}>
                                <Image src={Reactjs} alt="Reactjs" height={50} width={50}/>
                            </div>
                            <div>
                                <h3 className={styles.CLskills}>Reactjs</h3>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item relative float-left w-full">
                        <div class="bg-[#374151] rounded-full my-10 p-8 w-48 h-48">
                            <div className={styles.CLImage}>
                                <Image src={Nextjs} alt="Nextjs" height={50} width={50}/>
                            </div>
                            <div>
                                <h3 className={styles.CLskills}>Nextjs</h3>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item relative float-left w-full">
                        <div class="bg-[#374151] rounded-full my-10 p-8 w-48 h-48">
                            <div className={styles.CLImage}>
                                <Image src={Php} alt="Php" height={50} width={50}/>
                            </div>
                            <div>
                                <h3 className={styles.CLskills}>Php</h3>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item relative float-left w-full">
                        <div class="bg-[#374151] rounded-full my-10 p-8 w-48 h-48">
                            <div className={styles.CLImage}>
                                <Image src={Sql} alt="Sql" height={50} width={50}/>
                            </div>
                            <div>
                                <h3 className={styles.CLskills}>Sql</h3>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item relative float-left w-full">
                        <div class="bg-[#374151] rounded-full my-10 p-8 w-48 h-48">
                            <div className={styles.CLImage}>
                                <Image src={Nodejs} alt="Nodejs" height={50} width={50}/>
                            </div>
                            <div>
                                <h3 className={styles.CLskills}>Nodejs</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Carousel;