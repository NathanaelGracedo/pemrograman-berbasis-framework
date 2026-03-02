import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../views/produk/produk.module.scss";

type ProductType = 
{
    id: string;
    image: string;
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
            <div className={styles.hero}>
                <h1>Daftar Produk</h1>
                <p>Temukan produk pilihan Anda</p>
            </div>
            <div className={styles.mainSection}>
                <div className={styles.container}>
                    <button className="border-2 border-black p-2 rounded mb-4" onClick={handleRefresh}>
                        Refresh Data
                    </button>
                    <div className={styles.productGrid}>
                        {products.map((product: ProductType) => (
                            <div key={product.id} className={styles.productCard}>
                                <img 
                                    src={product.image} 
                                    alt={product.name} 
                                    className="w-full h-48 object-cover rounded mb-2" 
                                />
                                <h3>{product.name}</h3>
                                <p>Kategori: {product.category}</p>
                                <p className={styles.price}>
                                    Rp {product.price.toLocaleString('id-ID')}
                                </p>
                                <p>Ukuran: {product.size}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default kategori;