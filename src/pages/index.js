import Head from 'next/head';
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Tabs from "@/components/Tabs";

// Importa el módulo CSS
import styles from '../styles/Home.module.css';
import Footer from "@/components/Footer";


export default function Home() {
  return (
      <div>
          <Head>
              <title>Conversor IEEE 754</title>
              <meta name="description" content="Conversor de números float a IEEE 754 y viceversa"/>
              <link rel="icon" href="/favicon.ico"/>
              <link
                  href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap"
                  rel="stylesheet"
              />
          </Head>

          <div className={styles.container}>
              {/* Barra lateral izquierda */}
              <aside className={styles.sidebar}>
              <Sidebar content="left"/>
              </aside>

              {/* Contenido principal */}
              <main className={styles.mainContent}>
                  <Header/>
                  <Tabs/>
              </main>

              {/* Barra lateral derecha */}
              <aside className={styles.sidebar}>
                  <Sidebar content="right"/>
              </aside>
          </div>
          <Footer />
      </div>
  );
}

