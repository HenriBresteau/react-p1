import ProtoTypes from "prop-types";
import linkedin from "/linkedin.svg";
import { useCallback, useContext } from "react";
import axios from "axios";
import classNames from "classnames";
import { Context } from "../context";
import logo from "/default.png";
function UserProfile(props) {
    const handleDelete = useCallback(
        (event) => {
            event.stopPropagation();
            axios.delete(
                "https://jsonplaceholder.typicode.com/users/" +
                    props.userData?.id
            );
            props.deleteUser(props.userData?.id);
        },
        [props]
    );
    const { context } = useContext(Context);
    return (
        <div
            className={classNames(
                "card",
                context.theme === "light"
                    ? "bg-dark text-light"
                    : "bg-light text-dark"
            )}
        >
            <div className="row mx-0">
                <div className="col-md-4 align-self-center">
                    <img
                        src={logo}
                        className="img-fluid rounded-circle mx-auto d-block"
                        alt="ui"
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.userData?.name}</h5>
                        <p className="card-text">
                            Some quick example text to build.
                        </p>

                        {props.complete && (
                            <div>
                                <p className="card-text">
                                    email : {props.userData?.email};
                                </p>
                                <p className="card-text">
                                    Adresse : {props.userData.address?.street},
                                    , {props.userData.address?.suite},{" "}
                                    {props.userData.address?.city};
                                </p>
                                <p className="card-text">
                                    Tel. : {props.userData?.phone};
                                </p>
                                <p className="card-text">
                                    Website. : {props.userData?.website};
                                </p>
                                <p className="card-text">
                                    Entreprise : {props.userData.company?.name};
                                </p>
                            </div>
                        )}

                        <div className="d-flex justify-content-between">
                            <button
                                type="button"
                                className="btn btn-primary text-light "
                            >
                                <img src={linkedin} alt="linkedin" />
                                <span className="ms-2">Contacter</span>
                            </button>
                            {props.deleteUser && (
                                <button
                                    type="button"
                                    className="btn btn-outline-danger"
                                    onClick={handleDelete}
                                >
                                    <i className="bi bi-trash3-fill"></i>
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
UserProfile.propTypes = {
    userData: ProtoTypes.object.isRequired,
    complete: ProtoTypes.bool,
    deleteUser: ProtoTypes.func,
};
export default UserProfile;
