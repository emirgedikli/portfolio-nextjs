import Links from "@src/Components/links";

let styles = {
  FTdiv: "bg-[#374151] fontNunito text-white opacity-90",
  FTdiv1: "px-16 py-4 lg:px-96 lg:py-10",
  FTdiv2: "flex pt-2 pb-3 lg:flex lg:pt-4 lg:pb-6",
  FTdiv3: "flex pt-2 lg:flex lg:pt-6",
  FTdiv4: "flex pt-1 lg:flex lg:pt-3",
  FTdiv5: "pt-6 lg:pt-6",
  FTh6: "font-bold pr-2",
};

const InfoPerso = () => {
  return (
    // FT div
    <div className={styles.FTdiv}>
      {/* FT div 1 */}
      <div className={styles.FTdiv1}>
        {/* FT div 2 */}
        <div className={styles.FTdiv2}>
          <h4>Contactez-moi:</h4>
        </div>
        <hr />
        {/* FT div 3 */}
        <div className={styles.FTdiv3}>
          <h6 className={styles.FTh6}>Tel:</h6>
          <a href="tel:+33767245024">+33767245024</a>
        </div>
        {/* FT div 4 */}
        <div className={styles.FTdiv4}>
          <h6 className={styles.FTh6}>E-mail:</h6>
          <a href="mailto:emirwtaha@gmail.com" rel="noreferrer" target="_blank">
            emirwtaha@gmail.com
          </a>
        </div>
        {/* FT div 5 */}
        <div className={styles.FTdiv5}>
          <Links />
        </div>
      </div>
    </div>
  );
};

export default InfoPerso;
