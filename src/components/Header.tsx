import "../styles/Header.css";
import { useNavigate } from "react-router-dom";

export const Header = () => {

    const navigate = useNavigate();

    const navigateTable = () => {
        navigate("/table")
    }

    const navigateList = () => {
        navigate("/")
    }

    const navigateForm = () => {
        navigate("/form")
    }

    return (
        <header className="top-bar">
        <h1 className="top-bar__title">Mi Tienda</h1>
        <nav className="top-bar__nav">
        <a onClick={navigateList} className="top-bar__link">
          Inicio
        </a>
        <a onClick={navigateTable} className="top-bar__link">
          lista
        </a>
        <a onClick={navigateForm} className="top-bar__link">
          Formulario
        </a>
      </nav>
      </header>
    );
};
