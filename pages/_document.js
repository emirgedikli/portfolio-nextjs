import { Html, Head, Main, NextScript } from "next/document";

let styles = {
  html: "scroll-smooth",
};

export default function Document() {
  return (
    <Html lang="fr" className={styles.html}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap"
          rel="stylesheet"
        />
        {/* fontNunito */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Meddon&display=swap"
          rel="stylesheet"
        />
        {/* fontMeddon */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap"
          rel="stylesheet"
        />
        {/* fontArchivoBlack */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css"
        />
        {/* tailwind element */}
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        {/* AOS */}
      </Head>
      <body>
        <Main />
        <NextScript />
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"
        />
        {/* tailwind element */}
        <script defer src="https://unpkg.com/aos@next/dist/aos.js%22%3E" />
        <script defer>AOS.init();</script>
        {/* AOS */}
      </body>
    </Html>
  );
}
