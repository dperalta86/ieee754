import { useState } from 'react';
import styles from '../styles/BitDisplay.module.css';
import BitDisplay from "@/components/BitDisplay";

const FloatToIEEE754 = () => {
    const [floatValue, setFloatValue] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const handleConvert = async () => {
        if (isNaN(floatValue)) {
            setError("Por favor, ingresa un número flotante válido (utilice '.' para separar parte entera)");
            return;
        }
        setError(null);

        try {
            const response = await fetch('https://digitales1.onrender.com/ieeep754simple/float', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ float: parseFloat(floatValue) }),
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
                    <BitDisplay
                        mantissa={result.mantissa}
                        sign={result.sign}
                        exponent={result.exponent}
                    />
            )}
        </div>
    );
};

export default FloatToIEEE754;