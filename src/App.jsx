import { useState } from "react";
import "./App.css";
import Componente from "./components/componente";
import Hijo from "./components/Hijo";
import Hijo2 from "./components/Hijo2";
import Hijo3 from "./components/Hijo3";

function App() {
    const name = "Javier";
    let alumno = name + " García";
    // let num = 0;
    const [num, setNum] = useState(0);
    const place = "Escribe tu nombre";
    const [valor, setValor] = useState("");
    const condicion = 5;
    let texto = "";
    const alumnos = ["Javier", "Oscar", "Ricardo"];
    const alumnos2 = [
        { id: 1, name: "Javier", apellido: "García", telefono: "666666666" },
        { id: 2, name: "Oscar", apellido: "Cortés", telefono: "777777777" },
        { id: 3, name: "Ricardo", apellido: "Díaz", telefono: "888888888" },
    ];
    const [displayName, setDisplayName] = useState("");

    const saludo = () => {
        console.log("Hola");
    };

    const sumar = () => {
        setNum(num + 1);
        console.log(num);
    };

    const handleValor = (e) => {
        setValor(e.target.value);
    };

    for (let i = 0; i < 10; i++) {
        texto += i + " ";
    }

    let ralumnos = alumnos.map((alumno, index) => {
        //"Javier", "Oscar", "Ricardo"
        return <p key={index}>{alumno}</p>;
    });

    let ralumnos2 = alumnos2.map((alumno, index) => (
        <div key={index}>
            <p>{alumno.name}</p>
            <p>{alumno.apellido}</p>
            <p>{alumno.telefono}</p>
        </div>
    ));

    const login = (name) => {
        setDisplayName(name);
    };

    return (
        <div>
            <h1 onClick={saludo}>Hola mundo</h1>
            <p>El alumno se llama: {alumno}</p>
            <Componente />

            <div>
                <h2 onClick={sumar}>Variables y reactividad</h2>
                <p>{num}</p>
            </div>

            <div>
                <h2>Atributos dinámicos y variables bidireccionales</h2>
                <input
                    type="text"
                    placeholder={place}
                    value={valor}
                    onChange={handleValor}
                />
                <p>Tu nombre es: {valor}</p>
            </div>

            <div>
                <h2>Condicionales</h2>
                {condicion === 5 && <p>Verdadero</p>}
                {!condicion === 5 && <p>Falso</p>}

                {condicion > 6 ? <p>Verdadero</p> : <p>Falso</p>}
                <h3>{texto}</h3>
            </div>

            <div>
                <h2>Renderizado de listas</h2>
                {ralumnos}
            </div>

            <div>
                <h2>Renderizado de listas de objetos</h2>
                {ralumnos2}
            </div>

            <div>
                <h2>Props pasar info de padre a hijo</h2>
                <Hijo texto="info del padre" alumno={alumnos2[0]} />
            </div>

            <div>
                <h2>Pasar información de hijo a padre</h2>
                <p>Hola {displayName}</p>
                <Hijo2 handleLogin={login} userName={displayName} />
            </div>

            <div>
                <h2>Elevar estado</h2>
                <Hijo3 userName={displayName} />
            </div>
        </div>
    );
}

export default App;
