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
import Git from '@src/assets/img/Git.png'
import Npm from '@src/assets/img/Npm.png'

let styles = {
    CSdiv: "flex justify-center",
    CSdivCarousel: "carousel slide relative",
    CSdiv1: "",
    CSImage: "flex justify-center py-6",
    CSskills: "flex justify-center uppercase text-white opacity-50",
}

let Carousel = () => {
    return (
        // CS div
        <div className={styles.CSdiv}>
            {/* CS div Carousel*/}
            <div id="carouselExampleSlidesOnly" data-bs-ride="carousel">
                {/* CS div 1 */}
                <div class="carousel-inner relative w-full overflow-hidden">
                    {/* CS div Html */}
                    <div class="carousel-item active relative float-left w-full">
                        {/* CS div Html 1 */}
                        <div class="bg-[#374151] rounded-full my-10 p-8 w-48 h-48">
                            {/* CS div Html 2 */}
                            <div className={styles.CSImage}>
                                <Image src={Html} alt="Html" height={50} width={60}/>
                            </div>
                            {/* CS div Html 3 */}
                            <div>
                                <h3 className={styles.CSskills}>Html</h3>
                            </div>
                        </div>
                    </div>
                    {/* CS div Css */}
                    <div class="carousel-item relative float-left w-full">
                        {/* CS div Css 1 */}
                        <div class="bg-[#374151] rounded-full my-10 p-8 w-48 h-48">
                            {/* CS div Css 2 */}
                            <div className={styles.CSImage}>
                                <Image src={Css} alt="Css" height={50} width={50}/>
                            </div>
                            {/* CS div Css 3 */}
                            <div>
                                <h3 className={styles.CSskills}>Css</h3>
                            </div>
                        </div>
                    </div>
                    {/* CS div Javascript */}
                    <div class="carousel-item relative float-left w-full">
                        {/* CS div Javascript 1 */}
                        <div class="bg-[#374151] rounded-full my-10 p-8 w-48 h-48">
                            {/* CS div Javascript 2 */}
                            <div className={styles.CSImage}>
                                <Image src={Javascript} alt="Javascript" height={50} width={70}/>
                            </div>
                            {/* CS div Javascript 3 */}
                            <div>
                                <h3 className={styles.CSskills}>Javascript</h3>
                            </div>
                        </div>
                    </div>
                    {/* CS div Webpack */}
                    <div class="carousel-item relative float-left w-full">
                        {/* CS div Webpack 1 */}
                        <div class="bg-[#374151] rounded-full my-10 p-8 w-48 h-48">
                            {/* CS div Webpack 2 */}
                            <div className={styles.CSImage}>
                                <Image src={Webpack} alt="Webpack" height={50} width={50}/>
                            </div>
                            {/* CS div Webpack 3 */}
                            <div>
                                <h3 className={styles.CSskills}>Webpack</h3>
                            </div>
                        </div>
                    </div>
                    {/* CS div Bootstrap */}
                    <div class="carousel-item relative float-left w-full">
                        {/* CS div Bootstrap 1 */}
                        <div class="bg-[#374151] rounded-full my-10 p-8 w-48 h-48">
                            {/* CS div Bootstrap 2 */}
                            <div className={styles.CSImage}>
                                <Image src={Bootstrap} alt="Bootstrap" height={50} width={70}/>
                            </div>
                            {/* CS div Bootstrap 3 */}
                            <div>
                                <h3 className={styles.CSskills}>Bootstrap</h3>
                            </div>
                        </div>
                    </div>
                    {/* CS div Tailwind */}
                    <div class="carousel-item relative float-left w-full">
                        {/* CS div Tailwind 1 */}
                        <div class="bg-[#374151] rounded-full my-10 p-8 w-48 h-48">
                            {/* CS div Tailwind 2 */}
                            <div className={styles.CSImage}>
                                <Image src={Tailwind} alt="Tailwind" height={50} width={50}/>
                            </div>
                            {/* CS div Tailwind 3 */}
                            <div>
                                <h3 className={styles.CSskills}>Tailwind</h3>
                            </div>
                        </div>
                    </div>
                    {/* CS div Wordpress */}
                    <div class="carousel-item relative float-left w-full">
                        {/* CS div Wordpress 1 */}
                        <div class="bg-[#374151] rounded-full my-10 p-8 w-48 h-48">
                            {/* CS div Wordpress 2 */}
                            <div className={styles.CSImage}>
                                <Image src={Wordpress} alt="Wordpress" height={50} width={50}/>
                            </div>
                            {/* CS div Wordpress 3 */}
                            <div>
                                <h3 className={styles.CSskills}>Wordpress</h3>
                            </div>
                        </div>
                    </div>
                    {/* CS div Reactjs */}
                    <div class="carousel-item relative float-left w-full">
                        {/* CS div Reactjs 1 */}
                        <div class="bg-[#374151] rounded-full my-10 p-8 w-48 h-48">
                            {/* CS div Reactjs 2 */}
                            <div className={styles.CSImage}>
                                <Image src={Reactjs} alt="Reactjs" height={50} width={60}/>
                            </div>
                            {/* CS div Reactjs 3 */}
                            <div>
                                <h3 className={styles.CSskills}>Reactjs</h3>
                            </div>
                        </div>
                    </div>
                    {/* CS div Nextjs */}
                    <div class="carousel-item relative float-left w-full">
                        {/* CS div Nextjs 1 */}
                        <div class="bg-[#374151] rounded-full my-10 p-8 w-48 h-48">
                            {/* CS div Nextjs 2 */}
                            <div className={styles.CSImage}>
                                <Image src={Nextjs} alt="Nextjs" height={50} width={60}/>
                            </div>
                            {/* CS div Nextjs 3 */}
                            <div>
                                <h3 className={styles.CSskills}>Nextjs</h3>
                            </div>
                        </div>
                    </div>
                    {/* CS div Php */}
                    <div class="carousel-item relative float-left w-full">
                        {/* CS div Php 1 */}
                        <div class="bg-[#374151] rounded-full my-10 p-8 w-48 h-48">
                            {/* CS div Php 2 */}
                            <div className={styles.CSImage}>
                                <Image src={Php} alt="Php" height={50} width={70}/>
                            </div>
                            {/* CS div Php 3 */}
                            <div>
                                <h3 className={styles.CSskills}>Php</h3>
                            </div>
                        </div>
                    </div>
                    {/* CS div Sql */}
                    <div class="carousel-item relative float-left w-full">
                        {/* CS div Sql 1 */}
                        <div class="bg-[#374151] rounded-full my-10 p-8 w-48 h-48">
                            {/* CS div Sql 2 */}
                            <div className={styles.CSImage}>
                                <Image src={Sql} alt="Sql" height={40} width={70}/>
                            </div>
                            {/* CS div Sql 3 */}
                            <div>
                                <h3 className={styles.CSskills}>Sql</h3>
                            </div>
                        </div>
                    </div>
                    {/* CS div Nodejs */}
                    <div class="carousel-item relative float-left w-full">
                        {/* CS div Nodejs 1 */}
                        <div class="bg-[#374151] rounded-full my-10 p-8 w-48 h-48">
                            {/* CS div Nodejs 2 */}
                            <div className={styles.CSImage}>
                                <Image src={Nodejs} alt="Nodejs" height={50} width={80}/>
                            </div>
                            {/* CS div Nodejs 3 */}
                            <div>
                                <h3 className={styles.CSskills}>Nodejs</h3>
                            </div>
                        </div>
                    </div>
                    {/* CS div Npm */}
                    <div class="carousel-item relative float-left w-full">
                        {/* CS div Npm 1 */}
                        <div class="bg-[#374151] rounded-full my-10 p-8 w-48 h-48">
                            {/* CS div Npm 2 */}
                            <div className={styles.CSImage}>
                                <Image src={Npm} alt="Npm" height={50} width={80}/>
                            </div>
                            {/* CS div Npm 3 */}
                            <div>
                                <h3 className={styles.CSskills}>Npm</h3>
                            </div>
                        </div>
                    </div>
                    {/* CS div Git */}
                    <div class="carousel-item relative float-left w-full">
                        {/* CS div Git 1 */}
                        <div class="bg-[#374151] rounded-full my-10 p-8 w-48 h-48">
                            {/* CS div Git 2 */}
                            <div className={styles.CSImage}>
                                <Image src={Git} alt="Git" height={50} width={50}/>
                            </div>
                            {/* CS div Git 3 */}
                            <div>
                                <h3 className={styles.CSskills}>Git</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel;
