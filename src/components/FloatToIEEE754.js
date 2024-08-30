import { useState } from 'react';
import styles from '../styles/BitDisplay.module.css';
import BitDisplay from "@/components/BitDisplay";

const FloatToIEEE754 = () => {
    const [floatValue, setFloatValue] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const handleConvert = async () => {
        // verifico si es un caso particular manejado por el servidor, o error de escritura
        let isFloat= true;
        let bodyValue;
        if (floatValue === "NaN" || floatValue === "Infinity" || floatValue === "-Infinity") {
            isFloat = false;
            setError(null);
        }else{
            if (isNaN(floatValue)) {
                setError("Por favor, ingresa un número flotante válido (utilice '.' para separar parte entera)");
                return;
            }
            setError(null);
        }

        if (!isFloat)
            bodyValue = JSON.stringify({float: floatValue});
        else
            bodyValue = JSON.stringify({float: parseFloat(floatValue)})
        try {
            const response = await fetch('https://digitales1.onrender.com/ieeep754simple/float', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: bodyValue,
            });

            const data = await response.json();

            // Aquí se calculan y se agregan los datos adicionales
            const binary = `${data.sign}${data.exponent}${data.mantissa}`;
            const hex = parseInt(binary, 2).toString(16).toUpperCase().padStart(8, '0');
            const littleEndian = [hex.slice(6, 8), hex.slice(4, 6), hex.slice(2, 4), hex.slice(0, 2)].join(' ');

            setResult({
                mantissa: data.mantissa,
                sign: data.sign,
                exponent: data.exponent,
                binary: binary,
                hex: hex,
                littleEndian: littleEndian
            });
        }
        catch (err){
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
                    binary={result.binary}
                    hex={result.hex}
                    littleEndian={result.littleEndian}
                />
            )}
        </div>
    );
};

export default FloatToIEEE754;