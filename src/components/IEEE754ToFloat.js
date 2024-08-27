import { useState } from 'react';

const IEEE754ToFloat = () => {
    const [bitString, setBitString] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const handleConvert = async () => {
        // Validar que la cadena de bits tenga exactamente 32 caracteres y solo contenga '0' o '1'
        if (bitString.length !== 32 || !/^[01]+$/.test(bitString)) {
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
                body: JSON.stringify({ bits: bitString }),
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
                placeholder="Ingresa una cadena de 32 bits"
                maxLength={32}
            />
            <button onClick={handleConvert}>Convertir</button>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {result && (
                <div>
                    <p>Resultado: {result}</p>
                </div>
            )}
        </div>
    );
};

export default IEEE754ToFloat;
