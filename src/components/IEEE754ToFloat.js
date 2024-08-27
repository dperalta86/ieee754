import { useState } from 'react';
import styles from '../styles/BitDisplay.module.css';

const IEEE754ToFloat = () => {
    const [bitString, setBitString] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);
    const [autoComplete, setAutoComplete] = useState(false);

    const handleConvert = async () => {
        let input = bitString;

        if (autoComplete && input.length < 32) {
            input = input.padEnd(32, '0');  // Completa con '0' hasta llegar a 32 bits
        }

        if (input.length !== 32 || !/^[01]+$/.test(input)) {
            setError("La cadena debe contener exactamente 32 bits (solo '0' y '1').");
            return;
        }
        setError(null);

        try {
            const response = await fetch('https://digitales1.onrender.com/ieeep754simple/ieee', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ bits: input }),
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
                value={bitString}
                onChange={(e) => setBitString(e.target.value)}
                placeholder="Ingresa una cadena de bits"
                className={styles.textInput}
            />
            <div className={styles.checkboxContainer}>
                <input
                    type="checkbox"
                    id="autocomplete"
                    checked={autoComplete}
                    onChange={() => setAutoComplete(!autoComplete)}
                    className={styles.checkbox}
                />
                <label htmlFor="autocomplete">Autocompletar con ceros hasta 32 bits</label>
            </div>
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

export default IEEE754ToFloat;