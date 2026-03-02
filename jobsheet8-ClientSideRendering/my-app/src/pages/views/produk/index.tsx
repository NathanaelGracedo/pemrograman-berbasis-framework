import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import HeroSection from "./HeroSection";
import styles from "./produk.module.scss";

type ProductType = {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
};

const TampilanProduk = ({ products }: { products: ProductType[] }) => {
    return (
        <div>
            <HeroSection />
            <div className={styles.produk}>
                <h1 className={styles.produk_title}>Daftar Produk</h1>
                <div className={styles.produk__content}>
                    {products.map((products: ProductType) => (
                        <div key={products.id} className={styles.produk__content__item}>
                            <div className={styles.produk__content__item__image}>
                                <img src={products.image} alt={products.name} width={200} />
                            </div>
                            <h4 className={styles.produk__content__item__name}>
                                {products.name}
                            </h4>
                            <p className={styles.produk__content__item__category}>
                                {products.category}
                            </p>
                            <p className={styles.produk__content__item__price}>
                                Rp {products.price.toLocaleString()}
                            </p>
                        </div>
                    ))}
                </div>
                <div className={styles.produk__content__skeleton}>
                    <div className={styles.produk__content__skeleton__image}></div>
                    <div className={styles.produk__content__skeleton__name}></div>
                    <div className={styles.produk__content__skeleton__category}></div>
                    <div className={styles.produk__content__skeleton__price}></div>
                    <div className={styles.produk__content__skeleton__size}></div></div>
            </div>
        </div>
    );
};

export default TampilanProduk;
