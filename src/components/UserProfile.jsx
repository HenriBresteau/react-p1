import ProtoTypes from "prop-types";
import linkedin from "/linkedin.svg";

function UserProfile({ userData }) {
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
                        <button
                            type="button"
                            className="btn btn-primary text-light "
                        >
                            <img src={linkedin} alt="linkedin" />
                            <span className="ms-2">Contacter</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
UserProfile.propTypes = {
    userData: ProtoTypes.object,
    picture: ProtoTypes.bool,
};
export default UserProfile;
