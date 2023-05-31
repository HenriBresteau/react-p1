import { Link } from "react-router-dom";
import logo from "../assets/react.svg";
import ProtoTypes from "prop-types";
import { useCallback, useContext } from "react";
import { Context } from "../context";
import classNames from "classnames";

function Header(props) {
    const { context, dispatch } = useContext(Context);

    const login = props.user ? (
        <span>Bienvenue {props.user} </span>
    ) : (
        <>
            <Link to="/login">Connctez vous</Link> <br /> ou&nbsp;
            <Link to="/register">Créer un compte</Link>
        </>
    );
    const switchTheme = useCallback(() => {
        dispatch({ type: "switchTheme" });
    }, [dispatch]);
    return (
        <>
            <nav
                className={classNames(
                    "navbar navbar-expand-md",
                    context.theme === "light"
                        ? "navbar-dark bg-dark text-light"
                        : "navbar-light bg-light text-dark"
                )}
            >
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

                    <div className="form-check form-switch">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckDefault"
                            onChange={switchTheme}
                        />
                        <label
                            className="form-check-label"
                            htmlFor="flexSwitchCheckDefault"
                        >
                            {context.theme}
                        </label>
                    </div>
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
