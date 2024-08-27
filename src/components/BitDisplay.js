import React from 'react';
import styles from '../styles/bitdisplay.module.css';

const BitDisplay = ({ mantissa, sign, exponent }) => {
    if (!mantissa || !sign || !exponent) {
        return <p className={styles.error}>Datos incompletos para mostrar la representación IEEE754.</p>;
    }

    return (
        <div className={styles.bitDisplayContainer}>
            <div className={styles.bitSection}>
                <span className={styles.bitLabel}>Signo:</span>
                <span className={styles.bitValue}>{sign}</span>
            </div>
            <div className={styles.bitSection}>
                <span className={styles.bitLabel}>Exponente:</span>
                <span className={styles.bitValue}>{exponent}</span>
            </div>
            <div className={styles.bitSection}>
                <span className={styles.bitLabel}>Mantisa:</span>
                <span className={styles.bitValue}>{mantissa}</span>
            </div>
        </div>
    );
};

export default BitDisplay;

