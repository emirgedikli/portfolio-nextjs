import { Html, Head, Main, NextScript} from "next/document";

export default function Document() {
    return (
        <Html lang="fr">
            <Head>
            <title>Emir Gedikli</title>
            {/* title */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap" rel="stylesheet" />
            {/* fontFjallaOne */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap" rel="stylesheet" />
            {/* fontQuicksand */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Meddon&display=swap" rel="stylesheet" />
            {/* fontMeddon */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap" rel="stylesheet" />
            {/* fontArchivoBlack */}
            <link rel='stylesheet' href='https://unpkg.com/emoji.css/dist/emoji.min.css' />
            {/* emoji.css */}
            </Head>
            <body className="bg-[#1f2937]">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
