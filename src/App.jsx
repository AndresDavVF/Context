import "./App.css";
import Informacion from "./Componentes/Informacion";
import UserContext from "./Context/UserContext";

function App() {
  const UserData = {
    nombre: "julio Marin",
    edad: 23,
    correo: "julio@gmil.com",
    genero: "Masculino",
  };

  return (
    <UserContext.Provider value={UserData}>
      <div className="App">
        <h1>Ejercicio usando Context</h1>
        <Informacion />
      </div>
    </UserContext.Provider>
  );
}

export default App;
