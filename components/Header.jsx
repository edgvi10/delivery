import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Header({ title, subtitle, hideheader, backlink, rightlink }) {
    const router = useRouter();

    useEffect(() => {
    }, []);
    return <>
        <Head>
            <title>{title}</title>
        </Head>
        {!hideheader &&
            <header className="navbar navbar-light border-bottom p-2 gap-2">
                {backlink && <Link href={backlink}><a className="btn btn-primary"><i className="fal fa-arrow-left" /></a></Link>}
                <h1 className="text-uppercase navbar-brand fw-normal my-0 me-auto">
                    <small className="d-block text-muted small">{process.env.NEXT_PUBLIC_APP_NAME}</small>
                    <b>{title}</b>
                </h1>
                {rightlink && <Link href={rightlink[0]}><a className="btn btn-primary"><i className={rightlink[1]} /></a></Link>}
            </header>
        }
    </>
}