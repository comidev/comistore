import { Button, ButtonCloseDialog } from "components/Button/styles.js";
import { Spinner } from "components/Spinner";
import { H4 } from "components/Title";
import { getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";
import { DAYS, MONTHS, YEARS } from "services/dates";
import { uploadFile } from "services/uploadFile";
import { COLOR } from "styles";
import {
    RowThree,
    Input,
    Label,
    NameSpan,
    RegisterContainer,
    RegisterForm,
    RowOne,
    RowTwo,
    Select,
    GeneralError,
    SaveChanges,
    SaveChangesPassword,
    RemoveImg,
    ImgContainer,
    GenderContainer,
} from "pages/Register/styles.js";
import { GENDER } from "services/gender";
import { Dialog } from "components/Dialog";
import useCountries from "hooks/useCountries";
import useDialog from "hooks/useDialog";
import useEditCustomer from "hooks/useEditCustomer";
import { getAuthInfo } from "api/user";
import { getCustomerById } from "api/customer";
import Page404 from "components/404";
import { WITHOUT_PHOTO } from "services/photo";
import { getToken, hasToken } from "services/token";

export default function Edit() {
    const { countries } = useCountries();
    const [isDrag, setIsDrag] = useState("");
    const [loadingImg, setLoadingImg] = useState(false);
    const [loadingCustomerInfo, setLoadingCustomerInfo] = useState(true);
    const [customer, setCustomer] = useState(null);
    const [photoUrl, setPhotoUrl] = useState("");

    useEffect(() => {
        if (hasToken()) {
            getToken().then((token) => {
                token &&
                    getAuthInfo(token)
                        .then((res) => {
                            const { customerId } = res;
                            return getCustomerById(customerId, token);
                        })
                        .then((res) => {
                            const { dateOfBirth } = res;
                            res.dateOfBirth = new Date(dateOfBirth);
                            setCustomer(res);
                            setPhotoUrl(res.photoUrl || WITHOUT_PHOTO);
                            setLoadingCustomerInfo(false);
                        });
            });
        }
    }, []);

    const {
        dialogRef: modalGuardarCambios,
        open: openGuardarCambios,
        close: closeGuardarCambios,
    } = useDialog();

    const {
        dialogRef: modalCambiarPassword,
        open: openCambiarPassword,
        close: closeCambiarPassword,
    } = useDialog();

    const {
        handleChangeEmail,
        handleChangeUsername,
        handleSubmit,
        emailError,
        usernameError,
        generalError,
        handleChangePassword,
    } = useEditCustomer();

    if (!hasToken()) {
        return <Page404 />;
    }

    const handleRemoveURL = () => setPhotoUrl(WITHOUT_PHOTO);
    const handleDragEnter = () => setIsDrag("enter");
    const handleDragLeaver = () => setIsDrag("leaver");
    const handleDrop = () => setIsDrag("drop");
    const handleChangeImg = (e) => {
        const imgFile = e.target.files[0];
        if (imgFile) {
            setLoadingImg(true);
            const task = uploadFile(imgFile);
            task.on(
                "state_changed",
                () => {},
                () => {},
                () => {
                    getDownloadURL(task.snapshot.ref).then((url) => {
                        setPhotoUrl(url);
                        setLoadingImg(false);
                    });
                }
            );
            setIsDrag("drop");
        } else {
            setPhotoUrl(WITHOUT_PHOTO);
            setIsDrag("leaver");
        }
    };

    if (loadingCustomerInfo) {
        return <Spinner />;
    }

    return (
        <RegisterContainer>
            <H4>Editar perfil</H4>
            <RegisterForm
                onSubmit={(e) => handleSubmit(e, photoUrl, customer.customerId)}>
                {/* //TODO: NOMBRE Y DNI ------------------------ */}
                <RowTwo>
                    <Input
                        type="text"
                        placeholder="Nombre Completo"
                        defaultValue={customer.name}
                    />
                    <Input
                        type="text"
                        placeholder="DNI (8 caracteres)"
                        defaultValue={customer.dni}
                    />
                </RowTwo>
                <RowOne>
                    <NameSpan color={COLOR.RED}>{emailError}</NameSpan>
                    <Input
                        type="email"
                        placeholder="Correo electrónico"
                        onChange={(e) => handleChangeEmail(e, customer.email)}
                        defaultValue={customer.email}
                    />
                </RowOne>
                {/* //TODO: PAIS ------------------------ */}
                <RowOne>
                    <NameSpan>País</NameSpan>
                    <Select title="País">
                        {countries.map((item, index) => {
                            if (item.name === customer.country) {
                                return (
                                    <option
                                        key={index}
                                        value={item.name}
                                        selected="1">
                                        {item.name}
                                    </option>
                                );
                            }

                            return (
                                <option key={index} value={index}>
                                    {item.name}
                                </option>
                            );
                        })}
                    </Select>
                </RowOne>
                {/* //TODO: NACIMIENTO ------------------------ */}
                <RowThree>
                    <NameSpan>Fecha de nacimiento *</NameSpan>
                    <Select name="day">
                        {DAYS.map((item, index) => {
                            if (item === customer.dateOfBirth.getDate()) {
                                return (
                                    <option key={index} value={item} selected="1">
                                        {item}
                                    </option>
                                );
                            }

                            return (
                                <option key={index} value={item}>
                                    {item}
                                </option>
                            );
                        })}
                    </Select>
                    <Select name="month">
                        {MONTHS.map((item, index) => {
                            if (index === customer.dateOfBirth.getMonth()) {
                                return (
                                    <option
                                        key={index}
                                        value={index + 1}
                                        selected="1">
                                        {item}
                                    </option>
                                );
                            }

                            return (
                                <option key={index} value={index + 1}>
                                    {item}
                                </option>
                            );
                        })}
                    </Select>
                    <Select name="year">
                        {YEARS.map((item, index) => {
                            if (item === customer.dateOfBirth.getFullYear()) {
                                return (
                                    <option key={index} value={item} selected="1">
                                        {item}
                                    </option>
                                );
                            }

                            return (
                                <option key={index} value={item}>
                                    {item}
                                </option>
                            );
                        })}
                    </Select>
                </RowThree>
                {/* //TODO: USERNAME ------------------------ */}
                <RowOne>
                    <NameSpan color={COLOR.RED}>{usernameError}</NameSpan>
                    <Input
                        type="text"
                        placeholder="Username"
                        autoComplete="username"
                        onChange={(e) =>
                            handleChangeUsername(e, customer.user.username)
                        }
                        defaultValue={customer.user.username}
                    />
                </RowOne>
                {/* //TODO: GENERO ------------------------ */}
                <GenderContainer>
                    <NameSpan>Género</NameSpan>
                    {Object.values(GENDER).map((item, index) => {
                        if (item.toUpperCase() === customer.gender) {
                            return (
                                <Label key={index}>
                                    <input
                                        type={"radio"}
                                        name="generos"
                                        value={item.toUpperCase()}
                                        defaultChecked
                                    />
                                    <span>{item}</span>
                                </Label>
                            );
                        }
                        return (
                            <Label key={index}>
                                <input
                                    type={"radio"}
                                    name="generos"
                                    value={item.toUpperCase()}
                                />
                                <span>{item}</span>
                            </Label>
                        );
                    })}
                </GenderContainer>
                {/* //TODO: FOTO DE PERFIL ------------------------ */}
                <ImgContainer drag={isDrag}>
                    {photoUrl !== WITHOUT_PHOTO && (
                        <RemoveImg type="button" onClick={handleRemoveURL}>
                            ✖
                        </RemoveImg>
                    )}
                    <img src={photoUrl} alt="Perfil" />
                    <input
                        type={"file"}
                        alt="Foto de perfil"
                        accept="image/png, image/jpg, image/jpeg"
                        onDragEnter={handleDragEnter}
                        onDragLeave={handleDragLeaver}
                        onDrop={handleDrop}
                        onChange={handleChangeImg}
                    />
                </ImgContainer>
                {loadingImg ? (
                    <Spinner />
                ) : (
                    <Button
                        type="button"
                        height="3rem"
                        width="100%"
                        fontSize="1.2rem"
                        onClick={openGuardarCambios}>
                        Guardar Cambios
                    </Button>
                )}
                <Dialog ref={modalGuardarCambios}>
                    <ButtonCloseDialog onClick={closeGuardarCambios} type={"button"}>
                        ✖
                    </ButtonCloseDialog>
                    <SaveChanges>
                        <span>Ingrese su contraseña</span>
                        <Input
                            type="password"
                            placeholder="Password"
                            autoComplete="current-password"
                        />
                        <GeneralError>{generalError}</GeneralError>
                        <Button
                            type={"submit"}
                            height="3rem"
                            width="100%"
                            fontSize="1.2rem">
                            ¡¡Guardar Cambios!!
                        </Button>
                    </SaveChanges>
                </Dialog>
            </RegisterForm>
            <Button
                onClick={openCambiarPassword}
                height="3rem"
                bg={COLOR.REACT}
                width="100%"
                fontSize="1.2rem">
                ¡Quiero cambiar la contraseña!
            </Button>
            <Dialog ref={modalCambiarPassword}>
                <ButtonCloseDialog onClick={closeCambiarPassword} type={"button"}>
                    ✖
                </ButtonCloseDialog>
                <SaveChangesPassword
                    onSubmit={(e) => handleChangePassword(e, customer.user.userId)}>
                    <span>Ingrese su contraseña</span>
                    <Input
                        type="password"
                        placeholder="Password actual"
                        autoComplete="current-password"
                    />
                    <Input
                        type="password"
                        placeholder="Password nuevo"
                        autoComplete="current-password"
                    />
                    <GeneralError>{generalError}</GeneralError>
                    <Button height="3rem" width="100%" fontSize="1.2rem">
                        ¡¡Guardar Cambios!!
                    </Button>
                </SaveChangesPassword>
            </Dialog>
        </RegisterContainer>
    );
}
