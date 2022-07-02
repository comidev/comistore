import { existsEmail, updateCustomer } from "api/customer";
import { existsUsername } from "api/user";
import { useState } from "react";
import { isEmail } from "services/email";

export default function useEditCustomer() {
    const [emailError, setEmailError] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [generalError, setGeneralError] = useState("");

    const handleChangeEmail = (e, currentEmail) => {
        const emailForm = e.target.value;
        if (isEmail(emailForm)) {
            // TODO: MANDAMOS PARA VER SI YA EXISTE
            if (emailForm !== currentEmail) {
                existsEmail(emailForm).then((res) => {
                    if (res.exists) {
                        setEmailError("Este email ya está registrado!");
                    } else {
                        setEmailError("");
                    }
                });
            }
        } else {
            setEmailError("Email incorrecto");
        }
    };
    const handleChangeUsername = (e, currentUsername) => {
        const usernameForm = e.target.value;
        if (usernameForm && usernameForm.length >= 3) {
            // TODO: MANDAMOS PARA VER SI YA EXISTE
            if (usernameForm !== currentUsername) {
                existsUsername(usernameForm).then((res) => {
                    if (res.exists) {
                        setUsernameError("Este username ya existe!");
                    } else {
                        setUsernameError("");
                    }
                });
            }
        } else {
            setUsernameError("Username incorrecto");
        }
    };
    const handleSubmit = (e, photoUrl, customerId) => {
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

        let password = null;
        if (photoUrl) {
            const { 15: passwordHTML } = e.target;
            password = passwordHTML.value;
        } else {
            const { 14: passwordHTML } = e.target;
            password = passwordHTML.value;
        }

        console.log({ photoUrl, password });
        if (!username || usernameError.length > 0) {
            setGeneralError("Username incorrecto");
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

        console.log(customer);

        // TODO: Mandamos el customer por la API
        updateCustomer(customer, customerId).then((res) => {
            console.log(res);
            if (res.passwordIncorrect) {
                setGeneralError("Contraseña incorrecta");
            } else if (res.error) {
                setGeneralError("Campos incorrectos");
            } else {
                window.location.replace("/home");
            }
        });
    };

    const handleChangePassword = (e) => {
        e.preventDefault();
        const [currentPasswordHTML, newPasswordHTML] = e.target;
        const { value: currentPassword } = currentPasswordHTML;
        const { value: newPassword } = newPasswordHTML;
        console.log({ currentPassword, newPassword });
    };

    return {
        handleChangeEmail,
        handleChangeUsername,
        handleSubmit,
        emailError,
        usernameError,
        generalError,
        handleChangePassword,
    };
}
