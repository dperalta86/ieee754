import { useState } from 'react';

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

        // Validar que la cadena de bits tenga exactamente 32 caracteres y solo contenga '0' o '1'
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
            />
            <div className="checkbox-container">

                    <input
                        type="checkbox"
                        id="autocomplete"
                        checked={autoComplete}
                        onChange={() => setAutoComplete(!autoComplete)}
                    />
                    <label htmlFor="autocomplete">Autocompletar con ceros hasta 32 bits</label>


            </div>
            <button onClick={handleConvert}>Convertir</button>

            {error && <p style={{color: 'red'}}>{error}</p>}

            {result && (
                <div>
                    <p>Resultado: {result}</p>
                </div>
            )}
        </div>
    );
};

export default IEEE754ToFloat;

