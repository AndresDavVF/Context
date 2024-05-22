import { createContext } from "react";

const UserContext = createContext({
    nombres: null,
    edad: null,
    correo: null,
    genero: null
});

export default UserContext;