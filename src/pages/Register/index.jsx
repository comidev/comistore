import { Button, ButtonLink } from "components/Button/styles.js";
import { Spinner } from "components/Spinner";
import { H4 } from "components/Title";
import { getDownloadURL } from "firebase/storage";
import useCountries from "hooks/useCountries";
import useRegister from "hooks/useRegister";
import { useState } from "react";
import { DAYS, MONTHS, YEARS } from "services/dates";
import { WITHOUT_PHOTO } from "services/photo";
import { uploadFile } from "services/uploadFile";
import { COLOR } from "styles";
import {
    RowThree,
    Input,
    Label,
    RemoveImg,
    NameSpan,
    RegisterContainer,
    RegisterForm,
    RowOne,
    RowTwo,
    Select,
    GeneralError,
    ImgContainer,
    GenderContainer,
} from "./styles";

export default function Register() {
    const { countries } = useCountries();
    const [isDrag, setIsDrag] = useState("");
    const [photoUrl, setPhotoUrl] = useState(WITHOUT_PHOTO);
    const [loading, setLoading] = useState(false);

    const {
        handleChangeEmail,
        handleChangeUsername,
        handleSubmit,
        emailError,
        usernameError,
        generalError,
    } = useRegister();

    const handleRemoveURL = () => setPhotoUrl(WITHOUT_PHOTO);
    const handleDragEnter = () => setIsDrag("enter");
    const handleDragLeaver = () => setIsDrag("leaver");
    const handleDrop = () => setIsDrag("drop");
    const handleChangeImg = (e) => {
        const imgFile = e.target.files[0];
        if (imgFile) {
            setLoading(true);
            const task = uploadFile(imgFile);
            task.on(
                "state_changed",
                () => {},
                () => {},
                () => {
                    getDownloadURL(task.snapshot.ref).then((url) => {
                        setPhotoUrl(url);
                        setLoading(false);
                    });
                }
            );
            setIsDrag("drop");
        } else {
            setPhotoUrl(WITHOUT_PHOTO);
            setIsDrag("leaver");
        }
    };

    return (
        <RegisterContainer>
            <H4>Registrarse en ComiStore</H4>
            <RegisterForm onSubmit={(e) => handleSubmit(e, photoUrl)}>
                {/* //TODO: NOMBRE Y DNI ------------------------ */}
                <RowTwo>
                    <Input type="text" placeholder="Nombre Completo" />
                    <Input type="text" placeholder="DNI (8 caracteres)" />
                </RowTwo>
                <RowOne>
                    <NameSpan color={COLOR.RED}>{emailError}</NameSpan>
                    <Input
                        type="email"
                        placeholder="Correo electrónico"
                        onChange={handleChangeEmail}
                    />
                </RowOne>
                {/* //TODO: PAIS ------------------------ */}
                <RowOne>
                    <NameSpan>País</NameSpan>
                    <Select title="País">
                        {countries.map((item, index) => {
                            if (item.name === "Perú") {
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
                            if (item === new Date().getDate()) {
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
                            if (index === new Date().getMonth()) {
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
                            if (item === new Date().getFullYear()) {
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
                {/* //TODO: USERNAME Y PASSWORD ------------------------ */}
                <RowTwo>
                    <NameSpan color={COLOR.RED}>{usernameError}</NameSpan>
                    <Input
                        type="text"
                        placeholder="Username"
                        autoComplete="username"
                        onChange={handleChangeUsername}
                    />
                    <Input
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                    />
                </RowTwo>
                {/* //TODO: GENERO ------------------------ */}
                <GenderContainer>
                    <NameSpan>Género</NameSpan>
                    <Label>
                        <input
                            type={"radio"}
                            name="generos"
                            value="MASCULINO"
                            defaultChecked
                        />
                        <span>Masculino</span>
                    </Label>
                    <Label>
                        <input type={"radio"} name="generos" value="FEMENIMO" />
                        <span>Femenino</span>
                    </Label>
                    <Label>
                        <input type={"radio"} name="generos" value="OTRO" />
                        <span>Otro</span>
                    </Label>
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
                <GeneralError>{generalError}</GeneralError>
                {loading ? (
                    <Spinner />
                ) : (
                    <Button height="3rem" width="100%" fontSize="1.2rem">
                        Registrarse
                    </Button>
                )}
            </RegisterForm>
            <ButtonLink
                to={"/login"}
                height="3rem"
                bg={COLOR.REACT}
                width="100%"
                fontSize="1.2rem">
                Iniciar sesión en ComiStore
            </ButtonLink>
        </RegisterContainer>
    );
}
