import Head from 'next/head'
import Image from 'next/future/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import fundo from '../public/fundo.jpg'
import homem from '../public/homem.jpg'
import comida from '../public/comida.jpg'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>NutriZen</title>
        <meta name="description" content="NutriZen" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
       <Link href='/'>
        <a className={styles.letters}>Home</a>
        </Link>
        <Link href='/'>
        <a className={styles.letters}>Services</a>
        </Link>
        <Link href='/'>
        <a className={styles.letters}>Contact</a>
        </Link>
      </header>
      <Image src={fundo} className={styles.bcg} />
      <Image src={homem} className={styles.homem} />
      <div className={styles.square}>
        <h1> Hey! I'm John.</h1>
        <p className={styles.paragraph}>
          I help women and men who struggle with
        chronic dieting, disordered eating, and body
        image concerns make peace with food and their 
        bodies.
        </p>
        <button className={styles.botao}>Learn How</button>
      </div>
      <Image src={comida} className={styles.comida} />
      <a href="https://wa.me/552192485067" target="_blank"><img src='/wpp.png' className={styles.wpp}/></a>
    </div>
  )
}
