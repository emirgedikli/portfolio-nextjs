import Head from 'next/head';
import Header from '@src/Components/header'
import Introduction from '@src/Components/introduction';
import ViewCv from '@src/Components/ViewCv';
import MyWorks from '@src/Components/MyWorks';
import MyProjects from '@src/Components/MyProjects';
import Footer from '@src/Components/footer'

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
