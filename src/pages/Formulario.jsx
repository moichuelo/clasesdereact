import Header from "../components/Header";
import { useState } from "react";

function Formulario() {
    const [userName, setUserName] = useState({ username: "", password: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviado");
        console.log(userName);
    };

    const handleUserChange = (e) => {
        setUserName({ ...userName, username: e.target.value });
    };

    const handlePasswordChange = (e) => {
        setUserName({ ...userName, password: e.target.value });
    };

    return (
        <>
            <Header></Header>
            <br />
            <div>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <label htmlFor="username">Usuario: </label>
                        <input
                            type="text"
                            id="username"
                            onChange={handleUserChange}
                            value={userName.username}
                        />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="password">Contraseña: </label>
                        <input
                            type="password"
                            id="password"
                            onChange={handlePasswordChange}
                            value={userName.password}
                        />
                    </fieldset>
                    <button>Enviar</button>
                </form>

                <button
                    onClick={() => setUserName({ username: "", password: "" })}
                >
                    Eliminar info de la variable
                </button>
            </div>
        </>
    );
}

export default Formulario;
