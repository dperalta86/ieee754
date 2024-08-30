import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.phrase}>
                    <p>“Code is like humor. When you have to explain it, it’s bad.”</p>
                </div>
                <div className={styles.links}>
                    <a href="https://conversor.dperalta.com.ar">Conversor entre bases</a>
                    <a href="https://dperalta.com.ar">Aplicación 2</a>
                    {/* <a href="/app3">Aplicación 3</a>
                     Agregar más enlaces a medida crezca el portafolio */}
                </div>
                <div className={styles.contact}>
                    <a href="mailto:dp25443@gmail.com">Contacto</a>
                    <a href="https://www.linkedin.com/in/daniel-isa%C3%ADas-peralta-117187153" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://github.com/dperalta86" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
                <div className={styles.copyright}>
                    <p>&copy; {new Date().getFullYear()} @dperalta - Daniel Peralta. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
