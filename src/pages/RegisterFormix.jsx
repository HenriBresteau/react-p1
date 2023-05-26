import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import propTypes from "prop-types";
import { Form, Field, ErrorMessage, Formik } from "formik";
import * as Yup from "yup";

function Register(props) {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        axios
            .get(
                "https://data.gouv.nc/api/records/1.0/search/?dataset=liste-des-pays-et-territoires-etrangers&q=&rows=300&facet=libcog"
            )
            .then((res) => setCountries(res.data.records));
    }, []);
    const navigate = useNavigate();

    return (
        <div>
            <h2>Inscription avec Formik</h2>
            <Formik
                initialValues={{
                    name: "",
                    password: "",
                    email: "",
                    country: "",
                }}
                onSubmit={(values, { setSubmitting }) => {
                    try {
                        const { name, email, password, country } = values;
                        axios.post(
                            "https://jsonplaceholder.typicode.com/users",
                            {
                                name,
                                password,
                                email,
                                country,
                            }
                        );
                        setSubmitting(false);
                        navigate("/");
                        props.setUser(name);
                    } catch (error) {
                        console.error(error);
                        setSubmitting(false);
                    }
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .required("Un nom est nécessaire")
                        .min(2, "Au moins 2 caractères")
                        .max(50, "TRop long"),
                    password: Yup.string()
                        .required("Un mdp est obligatoire")
                        .min(2, "Au moins 2 caractères")
                        .max(8, "8 carateres max"),
                    email: Yup.string()
                        .email("Email non valide")
                        .required("Un email est obligatoire"),
                    country: Yup.string().required("Un pays est obligatoire"),
                })}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="mb-3">
                            <div className="input-group flex-nowrap">
                                <label
                                    htmlFor="name"
                                    className="input-group-text"
                                >
                                    Nom
                                </label>
                                <Field
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    id="name"
                                />
                                <ErrorMessage
                                    name="name"
                                    component="div"
                                    className="alert alert-warning mb-0"
                                />
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="input-group flex-nowrap">
                                <label
                                    htmlFor="name"
                                    className="input-group-text"
                                >
                                    Mot de passe
                                </label>
                                <Field
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    id="password"
                                />
                                <ErrorMessage
                                    name="password"
                                    component="div"
                                    className="alert alert-warning mb-0"
                                />
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="input-group flex-nowrap">
                                <label
                                    htmlFor="email"
                                    className="input-group-text"
                                >
                                    Email
                                </label>
                                <Field
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    id="email"
                                />
                                <ErrorMessage
                                    name="email"
                                    component="div"
                                    className="alert alert-warning mb-0"
                                />
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="input-group flex-nowrap">
                                <label
                                    htmlFor="country"
                                    className="input-group-text"
                                >
                                    Pays
                                </label>
                                <Field
                                    component="select"
                                    className="form-select"
                                    aria-label="Default select example"
                                    id="country"
                                >
                                    <option></option>
                                    {countries.map((country, index) => (
                                        <option
                                            key={index}
                                            value={country.fields.libcog}
                                        >
                                            {country.fields.libcog}
                                        </option>
                                    ))}
                                </Field>
                                <ErrorMessage
                                    name="country"
                                    component="div"
                                    className="alert alert-warning mb-0"
                                />
                            </div>
                        </div>
                        <div className="d-grid">
                            <button
                                className="btn btn-primary"
                                type="submit"
                                disabled={isSubmitting}
                            >
                                Valider
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
Register.propTypes = {
    setUser: propTypes.func.isRequired,
};

export default Register;
