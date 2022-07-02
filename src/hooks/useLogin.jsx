import { useState } from "react";
import { login } from "api/user.js";

export default function useLogin() {
    const [userError, setUserError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const loginForm = ({ username, password }) => {
        let hasErrors = false;
        setUserError("");
        setPasswordError("");

        if (!username || username.length < 3) {
            setUserError("Username incorrecto. Mínimo 3 caracteres");
            hasErrors = true;
        }
        if (!password || password.length < 3) {
            setPasswordError("Password incorrecto. Mínimo 3 caracteres");
            hasErrors = true;
        }

        if (!hasErrors) {
            login({ username, password }).then((res) => {
                if (res.error) {
                    setUserError(res.message);
                } else {
                    // TODO: QUÉ HAGO :'V ? HAY MUCHAS FORMAS!!!
                    const { access_token, refresh_token } = res;
                    window.localStorage.setItem("access_token", access_token);
                    window.localStorage.setItem("refresh_token", refresh_token);
                    window.location.replace("/home");
                }
            });
        }
    };

    return { loginForm, userError, passwordError };
}
