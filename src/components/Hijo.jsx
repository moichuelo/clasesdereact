function Hijo(props) {
    const { alumno, texto } = props; //Destructuring
    return (
        <div className="borde">
            <h4>Soy el hijo</h4>
            <p>{texto}</p>
            <p>
                El alumno se llama {alumno.name} {alumno.apellido} y su telefono
                es {alumno.telefono}
            </p>
            <label htmlFor=""></label>

            <select name="" id="" defaultValue="css">
                <option value="html">html</option>
                <option value="css">CSS</option>
            </select>
        </div>
    );
}

export default Hijo;
