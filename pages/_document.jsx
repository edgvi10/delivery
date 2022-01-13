import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)

        return { ...initialProps }
    }

    render() {
        const theme = process.env.NEXT_PUBLIC_THEME ?? "bootstrap.min.css";

        return (
            <Html>
                <Head>
                    <link rel="manifest" id="manifest" href="/api/manifest" />

                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
                    <link rel="apple-touch-icon" href="/assets/favicon/icon144.png" />
                    <link rel="apple-touch-startup-icon" href="/assets/favicon/icon144.png" />

                    <link rel="shortcut icon" href="/assets/favicon/favicon.ico" type="image/x-icon" />

                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&family=Rubik:wght@400;600&display=swap" rel="stylesheet" />

                    <link href="/assets/plugins/fontawesome/css/fontawesome.min.css" rel="stylesheet" />
                    <link href="/assets/plugins/fontawesome/css/light.min.css" rel="stylesheet" />
                    <link href="/assets/plugins/fontawesome/css/brands.min.css" rel="stylesheet" />

                    <link href={`/assets/plugins/bootstrap/${theme}`} rel="stylesheet" />
                    <link href={`/assets/plugins/material-colors/material-colors.min.css`} rel="stylesheet" />
                    <link href={`/assets/plugins/nprogress/nprogress.min.css`} rel="stylesheet" />
                    <link href={`/assets/styles.css`} rel="stylesheet" />

                    <script href={`/assets/plugins/bootstrap/bootstrap.bundle.min.js`}></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument