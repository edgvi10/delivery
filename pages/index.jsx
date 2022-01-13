import localforage from "localforage";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "@/root/components/Header";
import { getStaticMap } from "../src/libs/googlemaps";

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

export default function Home(props) {
    const router = useRouter();
    const [loading, toggleLoading] = useState(true);
    const [user_data, setUserData] = useState(null);
    const [user_location_image, setUserLocationImage] = useState('');

    const getUserData = async () => {
        localforage.getItem("user_data").then((user_data) => {
            // if (!user_data || !user_data.token)
            //     router.push(`/login?redirect=${router.pathname}`);

            setUserData(user_data);
            toggleLoading(false);
        });
    };

    useEffect(() => {
        getUserData();
    }, []);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position.coords);
            const dimensions = getWindowDimensions();
            console.log(dimensions);
            const gmaps_base_url = getStaticMap(position.coords.latitude, position.coords.longitude, `${dimensions.width}x${dimensions.height}`, "light");
            console.log(gmaps_base_url);
            setUserLocationImage(gmaps_base_url);
        }, (error) => {
            console.log(error);
        });
    }, []);
    return <>
        {loading ? <i className="fal fa-spinner-third fa-spin" /> : <main className="d-flex flex-column h-100">
            <Header title="Meus Pedidos" rightlink={[`/profile`, `fal fa-user`]} />

            <section className="d-flex flex-column flex-fill">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <div className="d-flex flex-column gap-2">

                        </div>
                    </li>
                </ul>
            </section>
        </main>}
    </>
}

export async function getStaticProps(ctx) {
    const props = {};
    if (process.env.NEXT_PUBLIC_APP_NAME) props.appname = process.env.NEXT_PUBLIC_APP_NAME;

    return {
        props
    }
}