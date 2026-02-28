import Link from "next/link";
import { useRouter } from "next/router";
// import styles from "./login.module.css";
import styles from "./login.module.scss";

const HalamanLogin = () => {
    const { push } = useRouter();
    
    const handlerLogin = () => {
        // Simulasi logic login
        console.log("Processing login...");
        
        // Navigasi imperatif ke halaman Product
        push('/produk');
    };

    return(
        <div className={styles.login}>
            <h1 className="text-3xl font-bold text-blue-600">Halaman Login</h1>
            <button onClick={() => handlerLogin()}>Login</button> <br />
            <Link href="/auth/register">Ke Halaman Register</Link>
        </div>
    );
};

export default HalamanLogin;