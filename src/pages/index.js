import Head from 'next/head';
import Header from '../components/Header';
import Tabs from '../components/Tabs';
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
      <div>
          <Head>
              <title>Conversor IEEE 754</title>
              <meta name="description" content="Conversor de números float a IEEE 754 y viceversa"/>
              <link rel="icon" href="/favicon.ico"/>
          </Head>

          <div className="container">
              {/* Barra lateral izquierda */}
              <aside className="sidebar">
                  <Sidebar content="left"/>
              </aside>

              {/* Contenido principal */}
              <main className="main-content">
                  <Header/>
                  <Tabs/>
              </main>

              {/* Barra lateral derecha */}
              <aside className="sidebar">
                  <Sidebar content="right"/>
              </aside>
          </div>
          <style jsx>{`
              .container {
                  display: flex;
                  flex-wrap: wrap;
              }

              .sidebar {
                  flex: 1;
                  min-width: 200px;
                  background-color: #f0f0f0;
                  padding: 20px;
              }

              .main-content {
                  flex: 2;
                  min-width: 300px;
                  padding: 20px;
              }

              @media screen and (max-width: 768px) {
                  .sidebar {
                      display: none; /* Ocultar las barras laterales en pantallas pequeñas */
                  }

                  .main-content {
                      flex: 1;
                      width: 100%;
                  }
              }
          `}</style>
      </div>
  );
}

