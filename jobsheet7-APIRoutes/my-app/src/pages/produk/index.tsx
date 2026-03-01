import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type ProductType = 
{
    id: string;
    name: string;
    price: number;
    size: string;
}

const kategori = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('/api/produk')
        .then((response) => response.json())
        .then((responsedata) => {
            setProducts(responsedata.data);
        })
        .catch((error) => {
            console.error("Error fetching data: ", error);
        });
    }, []);

    return (
        <div>
            <h1>Daftar Produk</h1>
            {products.map((product: ProductType) => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <p>Harga: {product.price}</p>
                    <p>Ukuran: {product.size}</p>
                </div>
             ))}
        </div>
    );
};

export default kategori;