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
    CSImage: "flex justify-center py-6",
    CSskills: "flex justify-center uppercase text-white opacity-50",
    CSdiv: "flex justify-center",
    CSdivCarousel: "carousel slide relative",
    CSdivCarousel1: "carousel-inner relative w-full overflow-hidden",
    CSdivHtml: "carousel-item active relative float-left w-full",
    CSdivHtml1: "bg-[#374151] rounded-full my-10 p-8 w-48 h-48",
    CSdivCss: "carousel-item relative float-left w-full",
    CSdivCss1: "bg-[#374151] rounded-full my-10 p-8 w-48 h-48",
    CSdivJavascript: "carousel-item relative float-left w-full",
    CSdivJavascript1: "bg-[#374151] rounded-full my-10 p-8 w-48 h-48",
    CSdivWebpack: "carousel-item relative float-left w-full",
    CSdivWebpack1: "bg-[#374151] rounded-full my-10 p-8 w-48 h-48",
    CSdivBootstrap: "carousel-item relative float-left w-full",
    CSdivBootstrap1: "bg-[#374151] rounded-full my-10 p-8 w-48 h-48",
    CSdivTailwind: "carousel-item relative float-left w-full",
    CSdivTailwind1: "bg-[#374151] rounded-full my-10 p-8 w-48 h-48",
    CSdivWordpress: "carousel-item relative float-left w-full",
    CSdivWordpress1: "bg-[#374151] rounded-full my-10 p-8 w-48 h-48",
    CSdivReactjs: "carousel-item relative float-left w-full",
    CSdivReactjs1: "bg-[#374151] rounded-full my-10 p-8 w-48 h-48",
    CSdivNextjs: "carousel-item relative float-left w-full",
    CSdivNextjs1: "bg-[#374151] rounded-full my-10 p-8 w-48 h-48",
    CSdivPhp: "carousel-item relative float-left w-full",
    CSdivPhp1: "bg-[#374151] rounded-full my-10 p-8 w-48 h-48",
    CSdivSql: "carousel-item relative float-left w-full",
    CSdivSql1: "bg-[#374151] rounded-full my-10 p-8 w-48 h-48",
    CSdivNodejs: "carousel-item relative float-left w-full",
    CSdivNodejs1: "bg-[#374151] rounded-full my-10 p-8 w-48 h-48",
    CSdivNpm: "carousel-item relative float-left w-full",
    CSdivNpm1: "bg-[#374151] rounded-full my-10 p-8 w-48 h-48",
    CSdivGit: "carousel-item relative float-left w-full",
    CSdivGit1: "bg-[#374151] rounded-full my-10 p-8 w-48 h-48",
}

let Carousel = () => {
    return (
        // CS div
        <div className={styles.CSdiv}>
            {/* CS div Carousel*/}
            <div className={styles.CSdivCarousel} id="carouselExampleSlidesOnly" data-bs-ride="carousel">
                {/* CS div 1 */}
                <div className={styles.CSdivCarousel1}>
                    {/* CS div Html */}
                    <div className={styles.CSdivHtml}>
                        {/* CS div Html 1 */}
                        <div className={styles.CSdivHtml1}>
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
                    <div className={styles.CSdivCss}>
                        {/* CS div Css 1 */}
                        <div className={styles.CSdivCss1}>
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
                    <div className={styles.CSdivJavascript}>
                        {/* CS div Javascript 1 */}
                        <div className={styles.CSdivJavascript1}>
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
                    <div className={styles.CSdivWebpack}>
                        {/* CS div Webpack 1 */}
                        <div className={styles.CSdivWebpack1}>
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
                    <div className={styles.CSdivBootstrap}>
                        {/* CS div Bootstrap 1 */}
                        <div className={styles.CSdivBootstrap1}>
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
                    <div className={styles.CSdivTailwind}>
                        {/* CS div Tailwind 1 */}
                        <div className={styles.CSdivTailwind1}>
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
                    <div className={styles.CSdivWordpress}>
                        {/* CS div Wordpress 1 */}
                        <div className={styles.CSdivWordpress1}>
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
                    <div className={styles.CSdivReactjs}>
                        {/* CS div Reactjs 1 */}
                        <div className={styles.CSdivReactjs1}>
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
                    <div className={styles.CSdivNextjs}>
                        {/* CS div Nextjs 1 */}
                        <div className={styles.CSdivNextjs1}>
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
                    <div className={styles.CSdivPhp}>
                        {/* CS div Php 1 */}
                        <div className={styles.CSdivPhp1}>
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
                    <div className={styles.CSdivSql}>
                        {/* CS div Sql 1 */}
                        <div className={styles.CSdivSql1}>
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
                    <div className={styles.CSdivNodejs}>
                        {/* CS div Nodejs 1 */}
                        <div className={styles.CSdivNodejs1}>
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
                    <div className={styles.CSdivNpm}>
                        {/* CS div Npm 1 */}
                        <div className={styles.CSdivNpm1}>
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
                    <div className={styles.CSdivGit}>
                        {/* CS div Git 1 */}
                        <div className={styles.CSdivGit1}>
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
