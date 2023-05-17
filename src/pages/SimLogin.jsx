import propTypes from "prop-types";
function SimLogin({ setUser }) {
    return (
        <div>
            <button
                className="btn btn-outline-secondary"
                onClick={() => setUser("Eva")}
            >
                Eva
            </button>
            <button
                className="btn btn-outline-success"
                onClick={() => setUser("Marc")}
            >
                Marc
            </button>
        </div>
    );
}
SimLogin.propTypes = {
    setUser: propTypes.func.isRequired,
};
export default SimLogin;
