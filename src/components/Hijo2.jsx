function Hijo2(props) {
    const handleclick = () => {
        props.handleLogin("Javier");
    };

    return (
        <div className="borde">
            <h4>Este es el hijo 2</h4>
            <p>El nombre de usario es {props.userName}</p>
            <button onClick={handleclick}>Login</button>
        </div>
    );
}

export default Hijo2;
