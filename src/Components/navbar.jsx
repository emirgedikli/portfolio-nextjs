import NightsStayIcon from "@mui/icons-material/NightsStay";

let styles = {
  HDdiv: "",
  HDdiv1: "flex flex-col items-center text-black lg:grid lg:grid-cols-2",
  HDdiv2: "py-4 fontMeddon text-white opacity-60 text-3xl lg:flex lg:justify-center",
  HDdiv3: "flex justify-around text-lg fontNunito text-white py-4 lg:flex lg:justify-center",
  HDaccueil: "opacity-90 lg:mr-10",
  HDcv: "px-4 opacity-90 uppercase",
  HDcontact: "bg-blue-600 rounded-md px-2 font-medium lg:mx-10",
  HDdarkmode: "ml-4",
};

const Navbar = () => {
  return (
    // HDdiv
    <div className={styles.HDdiv}>
      {/* HD div 1 */}
      <div className={styles.HDdiv1}>
        {/* HD div 2 */}
        <div className={styles.HDdiv2}>
          <h1>Emir Gedikli</h1>
        </div>
        {/* HD div 3 */}
        <div className={styles.HDdiv3}>
          <button className={styles.HDaccueil}>Accueil</button>
          <button className={styles.HDcv}>cv</button>
          <button className={styles.HDcontact}>Contact</button>
          <button>
            <NightsStayIcon className={styles.HDdarkmode} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
