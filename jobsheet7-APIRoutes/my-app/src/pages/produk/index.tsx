import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type ProductType = 
{
    id: string;
    name: string;
    price: number;
    size: string;
    category: string;
}

const kategori = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = () => {
        fetch('/api/produk')
        .then((response) => response.json())
        .then((responsedata) => {
            setProducts(responsedata.data);
        })
        .catch((error) => {
            console.error("Error fetching data: ", error);
        });
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleRefresh = () => {
        fetchProducts();
    };

    return (
        <div>
            <h1>Daftar Produk</h1>
            <button className="border-2 border-black p-2 rounded" onClick={handleRefresh} >Refresh Data</button>
            <br /><br />
            {products.map((product: ProductType) => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <p>Kategori: {product.category}</p>
                    <p>Harga: {product.price}</p>
                    <p>Ukuran: {product.size}</p>
                </div>
             ))}
        </div>
    );
};

export default kategori;