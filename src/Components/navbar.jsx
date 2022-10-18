import NightsStayIcon from '@mui/icons-material/NightsStay';

let styles = {
    HDdiv: "",
    HDdiv1: "flex flex-col items-center text-black",
    HDdiv2: "py-4 fontMeddon text-white opacity-60 text-3xl",
    HDdiv3: "flex justify-around text-lg fontNunito text-white py-4",
    HDdarkmode: "ml-4",
};

const Navbar = () => {
    return (
        // HDdiv
        <div>
            {/* HD div 1 */}
            <div className={styles.HDdiv1}>
                {/* HD div 2 */}
                <div className={styles.HDdiv2}>
                    <h1>Emir Gedikli</h1>
                </div>
                {/* HD div 3 */}
                <div className={styles.HDdiv3}>
                    <button class="opacity-90">Accueil</button>
                    <button class="px-4 opacity-90 uppercase">cv</button>
                    <button class="bg-blue-600 rounded-md px-2 font-medium">Contact</button>
                    <button><NightsStayIcon className={styles.HDdarkmode} /></button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
