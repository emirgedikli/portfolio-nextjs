import { Html, Head, Main, NextScript} from "next/document";

export default function Document() {
    return (
        <Html lang="fr">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Gemunu+Libre&display=swap" rel="stylesheet" />
            </Head>
            <body className="genumu">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}