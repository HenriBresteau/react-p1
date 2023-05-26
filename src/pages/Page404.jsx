import robot from "/default.png";
import { Link } from "react-router-dom";
function Page404() {
    return (
        <div className="d-flex align-items-center justify-content-center vh-75">
            <div className="text-center row">
                <div className="col-12">
                    <img src={robot} className="img-fluid" alt="Robot 404" />
                </div>
                <div className="col-12">
                    <p className="fs-3">
                        <span className="text-danger">Opps </span>
                    </p>
                    <p className="lead">
                        La page que vous cherchez n&apos;existe pas.
                    </p>
                    <Link
                        className="btn btn-primary"
                        aria-current="page"
                        to="/"
                    >
                        Retour en lieu sur
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Page404;
