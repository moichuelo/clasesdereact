import Header from "../components/Header";
import { useContext } from "react";
import Error from "./Error"; //solo necesario si cargamos la página de Error
import { Navigate } from "react-router-dom";
import { UserContext } from "../contexts/User.Context";

function Opciones() {
    // const [acceso] = useState(false);
    const { user } = useContext(UserContext);

    if (!user?.isAdmin) {
        // return <Error />; //nos importa el contenido de la página de Error
        return <Navigate to="/error" />; //nos lleva a la página de Error
    }

    return (
        <>
            <Header></Header>
            <h2>Opciones</h2>
        </>
    );
}

export default Opciones;
