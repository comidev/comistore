import { existsEmail, saveCutomer } from "api/customer";
import { existsUsername, login } from "api/user";
import { useState } from "react";
import { isEmail } from "services/email";
import { ACCESS, REFRESH } from "services/token";

export default function useRegister() {
    const [emailError, setEmailError] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [generalError, setGeneralError] = useState("");

    const handleChangeEmail = (e) => {
        const emailForm = e.target.value;
        if (isEmail(emailForm)) {
            // TODO: MANDAMOS PARA VER SI YA EXISTE
            existsEmail(emailForm).then((res) => {
                if (res.exists) {
                    setEmailError("Este email ya está registrado!");
                } else {
                    setEmailError("");
                }
            });
        } else {
            setEmailError("Email incorrecto");
        }
    };
    const handleChangeUsername = (e) => {
        const usernameForm = e.target.value;
        if (usernameForm && usernameForm.length >= 3) {
            // TODO: MANDAMOS PARA VER SI YA EXISTE
            existsUsername(usernameForm).then((res) => {
                if (res.exists) {
                    setUsernameError("Este username ya existe!");
                } else {
                    setUsernameError("");
                }
            });
        } else {
            setUsernameError("Username incorrecto");
        }
    };
    const handleSubmit = (e, photoUrl) => {
        e.preventDefault();
        const [
            nameHTML,
            dniHTML,
            emailHTML,
            countryHTML,
            dayHTML,
            monthHTML,
            yearHTML,
            usernameHTML,
            passwordHTML,
            maleHTML,
            femaleHTML,
            otherHTML,
        ] = e.target;

        const { value: name } = nameHTML;
        if (!name) {
            setGeneralError("El nombre no puede ser vacio");
            return;
        }
        const { value: dni } = dniHTML;
        if (!dni || dni.length !== 8) {
            setGeneralError("DNI incorrecto");
            return;
        }
        const { value: email } = emailHTML;
        if (!email || emailError.length > 0) {
            setGeneralError("Email incorrecto");
            return;
        }
        const { value: country } = countryHTML;
        if (!country) {
            setGeneralError("Debe escoger un país");
            return;
        }
        const { value: day } = dayHTML;
        if (!day) {
            setGeneralError("Debe ingresar el día de nacimiento");
            return;
        }
        const { value: month } = monthHTML;
        if (!month) {
            setGeneralError("Debe ingresar el mes de nacimiento");
            return;
        }
        const { value: year } = yearHTML;
        if (!year) {
            setGeneralError("Debe ingresar el año de nacimiento");
            return;
        }
        const { value: username } = usernameHTML;
        if (!username || usernameError.length > 0) {
            setGeneralError("Username incorrecto");
            return;
        }
        const { value: password } = passwordHTML;
        if (!password || password.length < 3) {
            setGeneralError("Password al menos 3 caracteres");
            return;
        }
        let gender = maleHTML.checked
            ? maleHTML.value
            : femaleHTML.checked
            ? femaleHTML.value
            : otherHTML.value;

        const dateOfBirth = new Date(year, month - 1, day);
        const user = { username, password };

        const customer = {
            dni,
            name,
            email,
            gender: gender || "MASCULINO",
            user,
            countryName: country,
            dateOfBirth,
        };

        // TODO: La imagen no es obligatorio, puede tener o no foto :v
        if (photoUrl) customer.photoUrl = photoUrl;

        // TODO: Mandamos el customer por la API
        saveCutomer(customer)
            .then((res) => login(res.user))
            .then((res) => {
                const { access_token, refresh_token } = res;
                window.localStorage.setItem(ACCESS, access_token);
                window.localStorage.setItem(REFRESH, refresh_token);
                window.location.replace("/home");
            });
    };

    return {
        handleChangeEmail,
        handleChangeUsername,
        handleSubmit,
        emailError,
        usernameError,
        generalError,
    };
}
