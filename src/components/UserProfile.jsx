import ProtoTypes from "prop-types";
import linkedin from "/linkedin.svg";
import { useCallback } from "react";
import axios from "axios";

function UserProfile({ userData, deleteUser }) {
    let logo = userData.name.toLowerCase();
    if (
        logo === "anne" ||
        logo === "aude" ||
        logo === "eva" ||
        logo === "marc" ||
        logo === "michel"
    ) {
        logo = userData.toLowerCase() + ".png";
    } else logo = "/default.png";

    const handleDelete = useCallback(() => {
        axios.delete(
            "https://jsonplaceholder.typicode.com/users/" + userData.id
        );
        deleteUser(userData.id);
    }, [userData, deleteUser]);
    return (
        <div className="card bg-body-secondary">
            <div className="row">
                <div className="col-md-4">
                    <img
                        src={logo}
                        className="img-fluid rounded-circle mx-auto d-block"
                        alt="ui"
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{userData.name}</h5>
                        <p className="card-text">
                            Some quick example text to build.
                        </p>
                        <div className="d-flex justify-content-between">
                            <button
                                type="button"
                                className="btn btn-primary text-light "
                            >
                                <img src={linkedin} alt="linkedin" />
                                <span className="ms-2">Contacter</span>
                            </button>
                            <button
                                type="button"
                                className="btn btn-outline-danger"
                                onClick={handleDelete}
                            >
                                <i className="bi bi-trash3-fill"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
UserProfile.propTypes = {
    userData: ProtoTypes.object.isRequired,
    deleteUser: ProtoTypes.func.isRequired,
};
export default UserProfile;
