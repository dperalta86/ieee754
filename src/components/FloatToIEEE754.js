import { useState } from 'react';
import styles from '../styles/bitdisplay.module.css';

const FloatToIEEE754 = () => {
    const [floatValue, setFloatValue] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const handleConvert = async () => {
        if (isNaN(floatValue)) {
            setError("Por favor, ingresa un número flotante válido.");
            return;
        }
        setError(null);

        try {
            const response = await fetch('https://digitales1.onrender.com/ieeep754simple/float', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ value: parseFloat(floatValue) }),
            });
            const data = await response.json();
            setResult(data);
        } catch (err) {
            setError('Hubo un error en la conversión. Por favor, inténtalo de nuevo.');
        }
    };

    return (
        <div>
            <input
                type="text"
                value={floatValue}
                onChange={(e) => setFloatValue(e.target.value)}
                placeholder="Ingresa un número flotante"
                className={styles.textInput}
            />
            <button onClick={handleConvert} className={styles.button}>Convertir</button>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {result && (
                <div className={styles.resultContainer}>
                    <p className={styles.resultText}>Resultado: {result}</p>
                </div>
            )}
        </div>
    );
};

export default FloatToIEEE754;