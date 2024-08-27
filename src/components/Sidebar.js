const Sidebar = ({ content }) => {
    return (
        <div className="sidebar-content">
            {content === 'left' ? (
                <>
                    <h3>@dperalta</h3>
                    <ul>
                        <li><a href="https://www.dperalta.com.ar" target="_blank" rel="noopener noreferrer">Página principal</a></li>
                        <li><a href="https://conversor.dperalta.com.ar" target="_blank" rel="noopener noreferrer">Conversor de bases</a></li>

                    </ul>
                </>
            ) : (
                <>
                    <h3>Enlaces Útiles</h3>
                    <ul>
                        <li><a href="https://es.wikipedia.org/wiki/IEEE_754" target="_blank" rel="noopener noreferrer">IEEE 754 en Wikipedia</a></li>
                        <li><a href="https://example.com" target="_blank" rel="noopener noreferrer">Otro recurso</a></li>
                    </ul>
                </>
            )}
        </div>
    );
};

export default Sidebar;
