import { ErrorMessage, Field, Form, Formik } from "formik";
import propTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

function SimLogin({ setUser }) {
    const navigate = useNavigate();
    return (
        <div>
            <h2>Connection</h2>
            <Formik
                initialValues={{
                    login: "",
                    password: "",
                }}
                validationSchema={Yup.object({
                    login: Yup.string().required(
                        "Un identifiant est nécessaire"
                    ),
                    password: Yup.string().required("Un mdp est obligatoire"),
                })}
                onSubmit={async (values, { setSubmitting }) => {
                    navigate("/");
                    setUser(values.login);
                    setSubmitting(false);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="mb-3">
                            <div className="input-group flex-nowrap">
                                <label
                                    htmlFor="login"
                                    className="input-group-text"
                                >
                                    Identifiant
                                </label>
                                <Field
                                    type="text"
                                    name="login"
                                    className="form-control"
                                    id="login"
                                />
                                <ErrorMessage
                                    name="login"
                                    component="div"
                                    className="alert alert-warning mb-0"
                                />
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="input-group flex-nowrap">
                                <label
                                    htmlFor="login"
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
SimLogin.propTypes = {
    setUser: propTypes.func.isRequired,
};
export default SimLogin;
