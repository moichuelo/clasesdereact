import { createContext } from "react";
import { useState } from "react";

const UserContext = createContext();

function UserProvider(props) {
    const [user, setUser] = useState(null);

    const userData = {
        name: "Moisés",
        email: "mNpDj@example.com",
        isAdmin: true,
    };

    const login = () => setUser(userData);
    const logout = () => setUser(null);

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {props.children}
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider };
