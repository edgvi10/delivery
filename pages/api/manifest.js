import manifest from "@/root/public/manifest.json";

const is_dev = (process.env.NODE_ENV === "development") ? true : false;

export default async function handler(req, res) {
    const new_manifest = manifest;

    // console.log("Instalando manifesto");

    new_manifest.name = process.env.NEXT_PUBLIC_COMPANY_NAME;
    new_manifest.short_name = process.env.NEXT_PUBLIC_APP_NAME;

    const manifestString = JSON.stringify(new_manifest, null, 4);

    return res.status(200).json(manifestString);
}