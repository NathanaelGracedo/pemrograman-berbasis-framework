import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
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
        width: '100%',
        textAlign: 'center'
      }}>
        <h1 style={{ 
          color: '#333', 
          marginBottom: '20px',
          fontSize: '2rem'
        }}>
          Praktikum Next.js Pages Router
        </h1>
        
        <div style={{ marginTop: '20px' }}>
          <Link href="/about" style={{
            backgroundColor: '#0070f3',
            color: 'white',
            textDecoration: 'none',
            fontSize: '18px',
            padding: '12px 30px',
            borderRadius: '8px',
            display: 'inline-block',
            fontWeight: '400',
          }}>
            Lihat Profil Saya 
          </Link>
        </div>
      </div>
    </div>
  )
}
