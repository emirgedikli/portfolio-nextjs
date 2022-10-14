import Header from '@src/layout/header'
import Introduction from '@src/layout/introduction';
import ViewCv from '@src/layout/ViewCv';
import Footer from '@src/layout/footer'

let styles = {
    HomeBody: "bg-[#1f2937] min-h-screen min-w-screen",
    HomeBodyDiv1: "py-6 px-10"
}

const HomePage = () => {
    return (
        <div className={styles.HomeBody}>
            <div className={styles.HomeBodyDiv1}>
                <Header />
                <Introduction />
                <ViewCv />
            </div>
            <Footer />
        </div>
    )
}

export default HomePage;
