import "./App.css";
import { Route, Routes } from "react-router-dom";
import Formulario from "./pages/Formulario";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import PostDet from "./pages/PostDet";
import Opciones from "./pages/Opciones";
import Error from "./pages/Error";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/formulario" element={<Formulario />} />
            <Route path="/opciones" element={<Opciones />} />

            <Route path="/blog/:id" element={<PostDet />} />
            <Route path="*" element={<Error />} />
        </Routes>
    );
}

export default App;
