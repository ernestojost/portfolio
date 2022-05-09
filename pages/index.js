import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Banner from '../components/banner'
import Portfolio from '../components/portfolio'
import About from '../components/about'
import Contact from '../components/contact'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ernesto Jost</title>
        <meta name="description" content="Mi portfolio web" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" />
      </Head>
      
      <Banner></Banner>
      <Portfolio></Portfolio>
      <About></About>
      <Contact></Contact>
    </div>
  )
}
