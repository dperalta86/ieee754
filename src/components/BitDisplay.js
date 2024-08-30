import React from 'react';
import styles from '../styles/BitDisplay.module.css';

const BitDisplay = ({ mantissa, sign, exponent, binary, hex, littleEndian }) => {
    if (!mantissa || !sign || !exponent) {
        return <p className={styles.error}>Datos incompletos para mostrar la representación IEEE754.</p>;
    }

    return (
        <div className={styles.bitDisplayContainer}>
            <div className={styles.bitSection}>
                <span className={styles.bitLabel}>Signo:</span>
                <span className="bit sign-bit">{sign}</span>
            </div>
            <div className={styles.bitSection}>
                <span className={styles.bitLabel}>Exponente:</span>
                <span className="bit exponent-bit">{exponent}</span>
            </div>
            <div className={styles.bitSection}>
                <span className={styles.bitLabel}>Mantisa:</span>
                <span className="bit mantissa-bit">{mantissa}</span>
            </div>

            {/* Datos adicionales */}
            <div className={styles.secondaryDataContainer}>
                <div className={styles.secondaryDataSection}>
                    <span className={styles.secondaryDataLabel}>Representación Binaria:</span>
                </div>
                <div>
                    <span className={styles.secondaryDataValue}>{binary}</span>
                </div>
                <div className={styles.secondaryDataSection}>
                    <span className={styles.secondaryDataLabel}>Hexadecimal:</span>
                    <span className={styles.secondaryDataValue}>{hex}</span>
                </div>
                <div className={styles.secondaryDataSection}>
                    <span className={styles.secondaryDataLabel}>Little Endian:</span>
                    <span className={styles.secondaryDataValue}>{littleEndian}</span>
                </div>
            </div>
        </div>
    );
};

export default BitDisplay;

