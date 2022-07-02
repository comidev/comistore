import styled from "@emotion/styled";
import { H2 } from "components/Title";

const Message = styled.div`
    margin: 3rem auto;
`;

export default function Page404() {
    return (
        <Message>
            <H2>Debe registrarse o iniciar sesión :D</H2>
        </Message>
    );
}
