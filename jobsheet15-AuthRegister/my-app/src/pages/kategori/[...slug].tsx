import { useRouter } from "next/router";

const HalamanKategori = () => {
    const { query } = useRouter();
    const slug = query.slug as string[] | undefined;

    return (
        <div>
            <h1>Halaman Kategori</h1>
            <h2>Parameter URL:</h2>
            
            {slug && slug.length > 0 ? (
                <ul>
                    {slug.map((item, index) => (
                        <li key={index}>
                            <strong>Parameter {index + 1}:</strong> {item}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Tidak ada parameter URL</p>
            )}
            <br />
            <div>
                <h3>Informasi URL:</h3>
                <p><strong>Jumlah Parameter:</strong> {slug ? slug.length : 0}</p>
                <p><strong>Full Path:</strong> /kategori/{slug ? slug.join("/") : ""}</p>
            </div>
        </div>
    );
};

export default HalamanKategori;
