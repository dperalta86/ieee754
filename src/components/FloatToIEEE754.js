import { useState } from 'react';

const FloatToIEEE754 = () => {
    const [floatValue, setFloatValue] = useState('');
    const [result, setResult] = useState(null);

    const handleConvert = async () => {
        const response = await fetch('https://digitales1.onrender.com/ieeep754simple/float', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ float: parseFloat(floatValue) }),
        });
        const data = await response.json();
        setResult(data);
    };

    return (
        <div>
            <input
                type="text"
                value={floatValue}
                onChange={(e) => setFloatValue(e.target.value)}
                placeholder="Ingresa un número float"
            />
            <button onClick={handleConvert}>Convertir</button>

            {result && (
                <div>
                    <p>Signo: {result.sign}</p>
                    <p>Exponente: {result.exponent}</p>
                    <p>Mantisa: {result.mantissa}</p>
                    <BitDisplay sign={result.sign} exponent={result.exponent} mantissa={result.mantissa} />
                    <p>Hexadecimal: {result.hex}</p>
                    <p>Little Endian: {result.littleEndian}</p>
                </div>
            )}
        </div>
    );
};

export default FloatToIEEE754;
