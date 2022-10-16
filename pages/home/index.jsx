import Head from 'next/head';
import Header from '@src/layout/header'
import Introduction from '@src/layout/introduction';
import ViewCv from '@src/layout/ViewCv';
import MyWorks from '@src/layout/MyWorks';
import MyProjects from '@src/layout/MyProjects';
import Footer from '@src/layout/footer'

let styles = {
    HomeBody: "bg-[#1f2937] min-h-screen min-w-screen",
    HomeBodyDiv1: "py-6 px-10"
}

const HomePage = () => {
    return (
        <div className={styles.HomeBody}>
            <Head>
                <title>Emir Gedikli</title>
            </Head>
            <div className={styles.HomeBodyDiv1}>
                <Header />
                <Introduction />
                <ViewCv />
                <MyWorks />
                <MyProjects />
            </div>
            <Footer />
        </div>
    )
}

export default HomePage;
