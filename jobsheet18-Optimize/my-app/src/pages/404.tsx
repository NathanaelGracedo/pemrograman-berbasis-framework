import styles from '@/styles/404.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const Custom404 = () => {
    return(
        <div className={styles.error}>
            <head>
                <title>404 - Halaman Tidak Ditemukan</title>
            </head>
            {/* <img src="/404.png" alt="404" className={styles.error__image}/> */}
            <Image
                src="/404.png"
                alt="404"
                width={400}
                height={200}
                className={styles.error__image}
            />
            <h1>404 - Halaman Tidak Ditemukan</h1>
            <p>Oops! Halaman anda telah dimakan</p>
            <Link href="/" className={styles.error__button}>
                Kembali ke Halaman Utama
            </Link>
        </div>
    );
};

export default Custom404;  
