import { useEffect, useState } from "react";
import Head from "next/head";
import router from "next/router";

import NProgress from 'nprogress';

// NProgress.configure({ showSpinner: publicRuntimeConfig.NProgressShowSpinner });

router.onRouteChangeStart = () => NProgress.start();
router.onRouteChangeComplete = () => NProgress.done();
router.onRouteChangeError = () => NProgress.done();

export default function MyApp({ Component, pageProps, appProps }) {
    const [theme, setTheme] = useState("bootstrap.min.css");

    useEffect(() => {
        const ls_theme = localStorage.getItem("theme");
        setTheme(ls_theme ?? "bootstrap.min.css");
    }, []);

    return <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        </Head>
        <Component {...appProps} {...pageProps} />
    </>
}
