import axios from "axios";
import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import propTypes from "prop-types";

function Register(props) {
    const [countries, setCountries] = useState([]);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState("");
    useEffect(() => {
        axios
            .get(
                "https://data.gouv.nc/api/records/1.0/search/?dataset=liste-des-pays-et-territoires-etrangers&q=&rows=300&facet=libcog"
            )
            .then((res) => setCountries(res.data.records));
    }, []);
    const handleName = useCallback((event) => {
        setName(event.target.value);
    }, []);
    const handlePasword = useCallback((event) => {
        setPassword(event.target.value);
    }, []);
    const handleEmail = useCallback((event) => {
        setEmail(event.target.value);
    }, []);
    const handleContry = useCallback((event) => {
        setCountry(event.target.value);
    }, []);
    const navigate = useNavigate();

    const handleSubmit = useCallback(
        (event) => {
            try {
                event.preventDefault();
                axios.post("https://jsonplaceholder.typicode.com/users", {
                    name,
                    email,
                    country,
                });
                props.setUser(name);
                navigate("/");
            } catch (error) {
                console.error(error);
            }
        },
        [name, email, country, navigate, props]
    );
    return (
        <div>
            <h2>Inscription</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <div className="input-group flex-nowrap">
                        <label htmlFor="name" className="input-group-text">
                            Nom
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            onChange={handleName}
                            value={name}
                        />
                    </div>
                </div>
                <div className="mb-3">
                    <div className="input-group flex-nowrap">
                        <label htmlFor="name" className="input-group-text">
                            Mot de passe
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            onChange={handlePasword}
                            value={password}
                        />
                    </div>
                </div>
                <div className="mb-3">
                    <div className="input-group flex-nowrap">
                        <label htmlFor="email" className="input-group-text">
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            onChange={handleEmail}
                            value={email}
                        />
                    </div>
                </div>
                <div className="mb-3">
                    <div className="input-group flex-nowrap">
                        <label htmlFor="country" className="input-group-text">
                            Pays
                        </label>
                        <select
                            className="form-select"
                            aria-label="Default select example"
                            id="country"
                            onChange={handleContry}
                            value={country}
                        >
                            {countries.map((country, index) => (
                                <option
                                    key={index}
                                    value={country.fields.libcog}
                                >
                                    {country.fields.libcog}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="d-grid">
                    <button className="btn btn-primary" type="submit">
                        Valider
                    </button>
                </div>
            </form>
        </div>
    );
}
Register.propTypes = {
    setUser: propTypes.func.isRequired,
};

export default Register;
