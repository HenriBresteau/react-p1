import { Link } from "react-router-dom";
import logo from "../assets/react.svg";
import { useCallback, useContext } from "react";
import { Context } from "../context";
import classNames from "classnames";

function Header() {
    const { context, dispatch } = useContext(Context);
    const disconnect = useCallback(() => {
        dispatch({ type: "disconnect" });
    }, [dispatch]);

    const login = context.user.name ? (
        <div className="d-flex flex-column align-items-center gap-2">
            <span>Bienvenue {context.user.name} </span>
            <div
                className={classNames("btn btn-outline-" + context.theme)}
                onClick={disconnect}
                id="logout"
            >
                <i className="bi bi-box-arrow-right d-flex align-items-center gap-2">
                    Déconnexion
                </i>
            </div>
        </div>
    ) : (
        <ul className=" navbar-nav d-flex  justify-content-center align-items-center">
            <li className="nav-item">
                <Link
                    to="/login"
                    className="nav-link d-flex flex-column align-items-center gap-2"
                >
                    <i className="bi bi-door-open fs-4"></i> Se Connecter
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/register"
                    className="nav-link d-flex flex-column align-items-center gap-2"
                >
                    <i className="bi bi-person-add fs-4"></i> Créer un compte
                </Link>
            </li>
        </ul>
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
                            <Link className="nav-link" to="/roles">
                                Roles
                            </Link>
                        </li>
                    </ul>

                    <div className="form-check form-switch mb-0">
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
                    <div className="navbar-text border rounded px-2">
                        {login}
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
