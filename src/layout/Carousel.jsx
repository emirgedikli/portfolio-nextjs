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
    CLdiv: "",
    CLdiv1: "flex justify-center",
    CLdiv3divA: "bg-[#374151] rounded-full my-10 p-8 w-48 h-48",
    CLdiv3divB: "bg-[#374151] rounded-full my-10 p-8 w-48 h-48",
    CLdiv3divC: "bg-[#374151] rounded-full my-10 p-8 w-48 h-48",
    CLdiv3divD: "bg-[#374151] rounded-full my-10 p-8 w-48 h-48",
    CLdiv3divE: "bg-[#374151] rounded-full my-10 p-8 w-48 h-48",
    CLdiv3divF: "bg-[#374151] rounded-full my-10 p-8 w-48 h-48",
    CLdiv3divG: "bg-[#374151] rounded-full my-10 p-8 w-48 h-48",
    CLdiv3divL: "bg-[#374151] rounded-full my-10 p-8 w-48 h-48",
    CLdiv3divM: "bg-[#374151] rounded-full my-10 p-8 w-48 h-48",
    CLdiv3divN: "bg-[#374151] rounded-full my-10 p-8 w-48 h-48",
    CLdiv3divO: "bg-[#374151] rounded-full my-10 p-8 w-48 h-48",
    CLdiv3divP: "bg-[#374151] rounded-full my-10 p-8 w-48 h-48",
    CLdivImage: "flex justify-center py-6 block w-full",
    CLdiv3divAdivh3: "flex justify-center uppercase text-white opacity-50",
}

let Carousel = () => {
    return (
        // CL section
        <section>
            {/* CL div */}
            <div>
                {/* CL div 1 */}
                <div id='skills' className={styles.CLdiv1}>
                    <div className={styles.CLdiv3divA}>
                        <div className={styles.CLdivImage}>
                            <Image src={Html} alt="Html" height={50} width={50} />
                        </div>
                        <div className={styles.CLdiv3divAdivh3}>
                            <h3>Html</h3>
                        </div>
                    </div>
                    <div className={styles.CLdiv3divB}>
                        <div className={styles.CLdivImage}>
                            <Image src={Css} alt="Css" height={50} width={50} />
                        </div>
                        <div className={styles.CLdiv3divAdivh3}>
                            <h3>Css</h3>
                        </div>
                    </div>
                    <div className={styles.CLdiv3divC}>
                        <div className={styles.CLdivImage}>
                            <Image src={Javascript} alt="Javascript" height={50} width={50} />
                        </div>
                        <div className={styles.CLdiv3divAdivh3}>
                            <h3>Javascript</h3>
                        </div>
                    </div>
                    <div className={styles.CLdiv3divD}>
                        <div className={styles.CLdivImage}>
                            <Image src={Webpack} alt="Webpack" height={50} width={50} />
                        </div>
                        <div className={styles.CLdiv3divAdivh3}>
                            <h3>Webpack</h3>
                        </div>
                    </div>
                    <div className={styles.CLdiv3divE}>
                        <div className={styles.CLdivImage}>
                            <Image src={Bootstrap} alt="Bootstrap" height={50} width={50} />
                        </div>
                        <div className={styles.CLdiv3divAdivh3}>
                            <h3>Bootstrap</h3>
                        </div>
                    </div>
                    <div className={styles.CLdiv3divF}>
                        <div className={styles.CLdivImage}>
                            <Image src={Tailwind} alt="Tailwind" height={50} width={50} />
                        </div>
                        <div className={styles.CLdiv3divAdivh3}>
                            <h3>Tailwind</h3>
                        </div>
                    </div>
                    <div className={styles.CLdiv3divG}>
                        <div className={styles.CLdivImage}>
                            <Image src={Wordpress} alt="Wordpress" height={50} width={50} />
                        </div>
                        <div className={styles.CLdiv3divAdivh3}>
                            <h3>Wordpress</h3>
                        </div>
                    </div>
                    <div className={styles.CLdiv3divL}>
                        <div className={styles.CLdivImage}>
                            <Image src={Reactjs} alt="Reactjs" height={50} width={50} />
                        </div>
                        <div className={styles.CLdiv3divAdivh3}>
                            <h3>Reactjs</h3>
                        </div>
                    </div>
                    <div className={styles.CLdiv3divM}>
                        <div className={styles.CLdivImage}>
                            <Image src={Nextjs} alt="Nextjs" height={50} width={50} />
                        </div>
                        <div className={styles.CLdiv3divAdivh3}>
                            <h3>Nextjs</h3>
                        </div>
                    </div>
                    <div className={styles.CLdiv3divN}>
                        <div className={styles.CLdivImage}>
                            <Image src={Php} alt="Php" height={50} width={50} />
                        </div>
                        <div className={styles.CLdiv3divAdivh3}>
                            <h3>Php</h3>
                        </div>
                    </div>
                    <div className={styles.CLdiv3divO}>
                        <div className={styles.CLdivImage}>
                            <Image src={Sql} alt="Sql" height={50} width={50} />
                        </div>
                        <div className={styles.CLdiv3divAdivh3}>
                            <h3>Sql</h3>
                        </div>
                    </div>
                    <div className={styles.CLdiv3divP}>
                        <div className={styles.CLdivImage}>
                            <Image src={Nodejs} alt="Nodejs" height={50} width={50} />
                        </div>
                        <div className={styles.CLdiv3divAdivh3}>
                            <h3>Nodejs</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Carousel;
