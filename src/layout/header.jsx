import NightsStayIcon from '@mui/icons-material/NightsStay';

let styles = {
    HDdarkmode: "ml-4",
};

const Header = () => {
    return (
        <section>
            <div class="flex flex-col items-center text-black">
                {/* HD div1 */}
                <div class="py-4 fontMeddon text-white opacity-60 text-3xl">
                    <h1>Emir Gedikli</h1>
                </div>
                {/* HD div2 */}
                <div class="flex justify-around text-lg fontNunito text-white py-4">
                    <button class="opacity-90">Accueil</button>
                    <button class="px-4 opacity-90 uppercase">cv</button>
                    <button class="bg-blue-600 rounded-md px-2 font-medium">Contact</button>
                    <button><NightsStayIcon className={styles.HDdarkmode} /></button>
                </div>
            </div>
        </section>
    )
}

export default Header;
