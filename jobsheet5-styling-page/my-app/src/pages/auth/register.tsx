import Link from "next/link";

const HalamanRegister = () => {
    return (
        <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
            <h1>Halaman Register</h1>
            
            <div style={{ marginBottom: "20px" }}>
                <button 
                    style={{ 
                        padding: "10px 20px", 
                        backgroundColor: "#0070f3", 
                        color: "white", 
                        border: "none", 
                        borderRadius: "5px",
                        cursor: "pointer",
                        width: "100%"
                    }}
                >
                    Register
                </button>
            </div>
            
            {/* Navigasi Link: Register ↔ Login */}
            <p style={{ textAlign: "center" }}>
                Sudah punya akun? {" "}
                <Link href="/auth/login" style={{ color: "#0070f3", textDecoration: "underline" }}>
                    Login di sini
                </Link>
            </p>
        </div>
    );
};

export default HalamanRegister;