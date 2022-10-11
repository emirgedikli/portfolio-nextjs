import { Html, Head, Main, NextScript} from "next/document";

export default function Document() {
    return (
        <Html lang="fr">
            <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Cinzel&display=swap" rel="stylesheet" />
            {/* fontCinzel */}
            </Head>
            <body className="bg-[#1f2937]">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
