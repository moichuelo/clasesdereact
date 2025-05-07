import "./componente.css";
import { useEffect } from "react";
import { useState } from "react";

function Componente() {
    const [contador, setContador] = useState(0);

    useEffect(() => {
        return () => {
            console.log("Componente desmontado");
        };
    }, []);

    return (
        <div id="componente">
            <h1>Este es mi componente</h1>
            <p>Párrafo del componente</p>
            <button onClick={() => setContador(contador + 1)}>
                {contador}
            </button>
        </div>
    );
}

export default Componente;
