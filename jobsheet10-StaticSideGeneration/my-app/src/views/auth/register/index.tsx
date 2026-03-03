import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./register.module.css";

const TampilanRegister = () => {
    const { push } = useRouter();
    
    const handlerRegister = () => {
        // Simulasi logic register
        console.log("Processing register...");
        
        // Navigasi imperatif ke halaman Login setelah register
        push('/auth/login');
    };

    return(
        <div className={styles.register}>
            <h1 style={{fontWeight: 800, fontSize: "1.5rem"}}>Halaman Register</h1>
            <button onClick={() => handlerRegister()}>Register</button> <br />
            <Link href="/auth/login">Sudah punya akun? Login di sini</Link>
        </div>
    );
};

export default TampilanRegister;
