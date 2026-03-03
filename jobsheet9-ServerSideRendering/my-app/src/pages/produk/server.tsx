import styles from "./product.module.scss";
import HeroSection from "../views/produk/HeroSection";
import { ProductType } from "../types/Product.type";

const halamanProdukServer = (props:{products: ProductType[]}) => {
    const { products } = props;
    return(
        <div>
            <HeroSection />
            <div className={styles.produk}>
                <h1 className={styles.produk_title}>Daftar Produk (Server-Side Rendering)</h1>
                <div className={styles.produk_content}>
                    {products.length === 0 ? (
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
export default halamanProdukServer;

export async function getServerSideProps() {
    const res = await fetch("http://localhost:3000/api/produk");
    const response = await res.json();
    return {
        props: {
            products: response.data,
        },
    };
}
