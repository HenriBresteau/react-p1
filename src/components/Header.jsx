import { Link } from "react-router-dom";
import logo from "../assets/react.svg";
import ProtoTypes from "prop-types";

function Header(props) {
    const login = props.user ? (
        <span>Bienvenue {props.user} </span>
    ) : (
        <span>Connctez vous</span>
    );
    return (
        <>
            <nav className="navbar navbar-dark bg-dark navbar-expand-md">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img
                            src={logo}
                            alt="Logo"
                            width="30"
                            height="24"
                            className="d-inline-block align-text-center me-2"
                        />
                        Mooc React
                    </Link>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link
                                className="nav-link active"
                                aria-current="page"
                                to="/"
                            >
                                Users
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/counter">
                                Compteur
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">
                                Login
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/roles">
                                Roles
                            </Link>
                        </li>
                    </ul>
                    <div className="navbar-text">{login}</div>
                </div>
            </nav>
        </>
    );
}

Header.propTypes = {
    user: ProtoTypes.string,
};
export default Header;
