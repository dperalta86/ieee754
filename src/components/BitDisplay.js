const BitDisplay = ({ sign, exponent, mantissa }) => (
    <div className="bit-display">
        <span className="bit sign-bit">{sign}</span>
        {exponent.split('').map((bit, idx) => (
            <span key={idx} className="bit exponent-bit">{bit}</span>
        ))}
        {mantissa.split('').map((bit, idx) => (
            <span key={idx} className="bit mantissa-bit">{bit}</span>
        ))}
    </div>
);

export default BitDisplay;
