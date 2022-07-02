import { Button, ButtonLink } from "components/Button/styles.js";
import { H4 } from "components/Title";
import useLogin from "hooks/useLogin";
import { COLOR } from "styles";
import {
    ErrorMessage,
    LabelError,
    LoginContainer,
    LoginFormContainer,
} from "./styles";

export default function LoginForm() {
    const { loginForm, userError, passwordError } = useLogin();

    const handleSubmit = (e) => {
        e.preventDefault();
        const [{ value: usernameOrEmail }, { value: password }] = e.target;
        loginForm({ username: usernameOrEmail, password });
    };

    return (
        <LoginContainer>
            <H4>Iniciar sesión en ComiStore</H4>
            <LoginFormContainer onSubmit={handleSubmit}>
                <LabelError>
                    <input
                        type="text"
                        placeholder="Escriba su username o email..."
                        autoComplete="username"
                        required
                        aria-required="true"
                    />
                    <ErrorMessage>{userError}</ErrorMessage>
                </LabelError>
                <LabelError>
                    <input
                        type="password"
                        placeholder="Escriba su password..."
                        autoComplete="current-password"
                        required
                        aria-required="true"
                    />
                    <ErrorMessage>{passwordError}</ErrorMessage>
                </LabelError>
                <Button height="3rem" width="100%" fontSize="1.2rem">
                    Iniciar sesión
                </Button>
            </LoginFormContainer>
            <ButtonLink
                to={"/register"}
                height="3rem"
                bg={COLOR.REACT}
                width="100%"
                fontSize="1.2rem">
                Registrarse en ComiStore
            </ButtonLink>
        </LoginContainer>
    );
}
