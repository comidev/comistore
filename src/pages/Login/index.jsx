import styled from "@emotion/styled";
import LoginForm from "components/LoginForm";

const LoginContainer = styled.div`
    width: 100%;
    max-width: 25rem;
    margin: 2rem auto;
`;

export default function Login() {
    return (
        <LoginContainer>
            <LoginForm />
        </LoginContainer>
    );
}
