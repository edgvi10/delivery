import localforage from "localforage";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "@/root/components/Header";
import { getStaticMap } from "../src/libs/googlemaps";
import number_format from "locutus/php/strings/number_format";

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

    const [products, setProducts] = useState([]);

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
        const products = products ?? [];
        products.push({ id: 1, barcode: "00000000000001", name: 'Batida de Maracujá', unit_price: 12.00, image: 'https://picsum.photos/100/100', promo_price: 6.00 });
        products.push({ id: 2, barcode: "00000000000002", name: 'Delírio Tropical', description: "Misturas de ervas e frutas cítricas", unit_price: 18.00, image: 'https://picsum.photos/100/100' });
        products.push({ id: 3, barcode: "00000000000002", name: 'Caipirinha de Limão', description: "Caipirinha de limão com 51", unit_price: 10.00, image: 'https://picsum.photos/100/100', promo_price: 9.00 });

        setProducts(products);
    }, []);

    useEffect(() => {
        // navigator.geolocation.getCurrentPosition((position) => {
        //     const dimensions = getWindowDimensions();
        //     const gmaps_url = getStaticMap(position.coords.latitude, position.coords.longitude, `${dimensions.width}x${dimensions.height}`, "light");
        //     setUserLocationImage(gmaps_url);
        // }, (error) => {
        //     console.log(error);
        // });
    }, []);
    return <>
        {loading ? <i className="fal fa-spinner-third fa-spin" /> : <main className="d-flex flex-column h-100 bg-light">
            <Header title="Meus Pedidos" rightlink={[`/profile`, `fal fa-user`]} />

            <section className="d-flex flex-column flex-fill">
                <ul className="list-group list-group-flush">
                    {products.map((product) => {
                        return <li key={product.id} className="list-group-item d-flex flex-row gap-2 align-items-center p-2">
                            <img src={product.image} alt={product.name} className="d-block" style={{ width: "3rem" }} />
                            <span className="d-flex flex-column gap-1">
                                <b>{product.name}</b>
                                {product.description && <small className="text-muted">{product.description}</small>}
                            </span>
                            <span className="ms-auto nowrap d-flex flex-column align-items-end">
                                {product.promo_price ?
                                    <>
                                        <span>R$ {number_format(product.promo_price, 2, ',', '.')}</span>
                                        <small className="text-muted">R$ {number_format(product.unit_price, 2, ',', '.')}</small>
                                    </>
                                    :
                                    <span>R$ {number_format(product.unit_price, 2, ',', '.')}</span>
                                }
                            </span>
                        </li>
                    })}
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