import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./product.module.scss";
import HeroSection from "../views/produk/HeroSection";

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
    const [isLoading, setIsLoading] = useState(true);

    const fetchProducts = () => {
        setIsLoading(true);
        fetch('/api/produk')
        .then((response) => response.json())
        .then((responsedata) => {
            setProducts(responsedata.data);
            setIsLoading(false);
        })
        .catch((error) => {
            console.error("Error fetching data: ", error);
            setIsLoading(false);
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
            <HeroSection />
            <div className={styles.produk}>
                <h1 className={styles.produk_title}>Daftar Produk</h1>
                <button className="border-2 border-black p-2 rounded mb-4" onClick={handleRefresh}>
                    Refresh Data
                </button>
                <div className={styles.produk_content}>
                    {isLoading ? (
                        <>
                            {[1, 2, 3, 4].map((item) => (
                                <div key={item} className={styles.produk_content_skeleton}>
                                    <div className={styles.produk_content_skeleton_image}></div>
                                    <div className={styles.produk_content_skeleton_name}></div>
                                    <div className={styles.produk_content_skeleton_category}></div>
                                    <div className={styles.produk_content_skeleton_price}></div>
                                    <div className={styles.produk_content_skeleton_size}></div>
                                </div>
                            ))}
                        </>
                    ) : (
                        <>
                            {products.map((product: ProductType) => (
                                <div key={product.id} className={styles.produk_content_item}>
                                    <img 
                                        src={product.image} 
                                        alt={product.name} 
                                        className={styles.produk_content_item_image}
                                    />
                                    <h4 className={styles.produk_content_item_name}>
                                        {product.name}
                                    </h4>
                                    <p className={styles.produk_content_item_category}>
                                        Kategori: {product.category}
                                    </p>
                                    <p className={styles.produk_content_item_price}>
                                        Rp {product.price.toLocaleString('id-ID')}
                                    </p>
                                    <p className={styles.produk_content_item_size}>
                                        Ukuran: {product.size}
                                    </p>
                                </div>
                            ))}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default kategori;