import Link from 'next/link'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <>
      <div className={inter.className} style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}>
        
        <div style={{
          backgroundColor: '#f9f9f9',
          padding: '40px',
          borderRadius: '10px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          maxWidth: '500px',
          width: '100%'
        }}>
          <h1 style={{ 
            color: '#333', 
            marginBottom: '30px',
            textAlign: 'center' 
          }}>
            Tentang Saya
          </h1>
          
          
          <div style={{ lineHeight: '2' }}>
            <p style={{ fontSize: '18px', margin: '10px 0' }}>
              <strong>Nama:</strong> Nathanael Juan Gracedo
            </p>
            <p style={{ fontSize: '18px', margin: '10px 0' }}>
              <strong>NIM:</strong> 2341720217
            </p>
            <p style={{ fontSize: '18px', margin: '10px 0' }}>
              <strong>Program Studi:</strong> Teknik Informatika
            </p>
          </div>

          <div style={{ marginTop: '30px', textAlign: 'center' }}>
            <Link href="/" style={{
              color: '#0070f3',
              textDecoration: 'none',
              fontSize: '16px',
              padding: '10px 20px',
              border: '1px solid #0070f3',
              borderRadius: '5px',
              display: 'inline-block',
              transition: 'all 0.3s'
            }}>
              Kembali 
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}