import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Context } from "../context";

const fakeAxios = {
    post: (url, data) => {
        if (url === "/api/login") {
            if (data.login === "moi" && data.password === "123456") {
                return Promise.resolve({
                    status: 200,
                    data: { token: "xxx.yyy.zzz", user: { name: data.login } },
                });
            } else {
                return Promise.reject({
                    status: 401,
                });
            }
        } else {
            return axios.post(url, data);
        }
    },
};
function SimLogin() {
    const navigate = useNavigate();
    const { dispatch } = useContext(Context);
    const [authError, setAuthError] = useState("");
    return (
        <div>
            <h2>Connexion</h2>
            {authError && <div className="alert alert-danger">{authError}</div>}
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
                onSubmit={async ({ login, password }) => {
                    try {
                        const response = await fakeAxios.post("/api/login", {
                            login,
                            password,
                        });
                        axios.defaults.headers.common[
                            "Authorization"
                        ] = `Bearer: ${response.data.token}`;
                        dispatch({
                            type: "setUser",
                            payload: response.data.user,
                        });
                        navigate("/");
                    } catch (error) {
                        if (error.status === 401) {
                            setAuthError("Login ou mot de passe incorrect");
                        } else {
                            console.error(error);
                            setAuthError(error.mesasge);
                        }
                    }
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
export default SimLogin;
