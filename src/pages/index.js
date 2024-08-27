import Head from 'next/head';
import Header from '../components/Header';
import Tabs from '../components/Tabs';
import Sidebar from '../components/Sidebar';

// Importa el módulo CSS
import styles from '../styles/home.module.css';

export default function Home() {
  return (
      <div>
          <Head>
              <title>Conversor IEEE 754</title>
              <meta name="description" content="Conversor de números float a IEEE 754 y viceversa"/>
              <link rel="icon" href="/favicon.ico"/>
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
      </div>
  );
}

