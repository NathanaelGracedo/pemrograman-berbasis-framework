import styles from "../../pages/produk/product.module.scss";
import { ProductType } from "../../types/Product.type";
import Image from "next/image";
import Link from "next/link";

const TampilanProduk = ({ 
    products, 
    isLoading = false 
}: { 
    products: ProductType[]; 
    isLoading?: boolean;
}) => {
    return (
        <div>
            <div className={styles.produk}>
                <h1 data-testid="title" className={styles.produk_title}>Product Page</h1>
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
                                <Link href={`/produk/${product.id}`} key={product.id} className={styles.produk_content_item}>
                                    <Image src={product.image} alt={product.name} width={300} height={200}></Image>
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
                                </Link>
                            ))}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TampilanProduk;
