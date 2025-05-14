import { Link } from "react-router-dom";
import Header from "../components/Header";

function Error() {
    return (
        <>
            <Header></Header>
            <h1>Error</h1>
            <h3>No se puede acceder a la pagina</h3>
            <Link to="/">Ir a la pagina principal</Link>
        </>
    );
}

export default Error;
