import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <h1>Cabecera</h1>

            <nav>
                <ul className="link-list">
                    <li>
                        <Link className="link" to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className="link" to="/formulario">
                            Formulario
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
