const Header = () => (
    <div className="header">
        <img src="/images/image.png" alt="Descripción" className="heroImage" />
        <p>Esta aplicación permite convertir números float a su representación IEEE 754 (formato simple) y viceversa.</p>
        <p>Esta herramienta muestra el formato utilizado por la mayoria de los CPU's en la actualidad. Acepta los
         siguientes valores especiales: NaN (Not a number), Infinity, -Infinity.</p>
    </div>
);

export default Header;