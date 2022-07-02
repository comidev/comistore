import styled from "@emotion/styled";
import { COLOR } from "styles";

export const LoginContainer = styled.section`
    width: 100%;
    padding: 1rem 2rem 2rem;
    border-radius: 0.4rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const LoginFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    input {
        width: 100%;
        border-radius: 0.4rem;
        border: 1px solid rgba(0, 0, 0, 0.1);
        height: 3rem;
        margin-bottom: 1.5rem;
        padding-left: 1rem;
        font-size: 1rem;
        background-color: ${COLOR.WHITE2};

        &:focus-within {
            border-color: ${COLOR.PRIMARY};
            background-color: ${COLOR.WHITE};
            box-shadow: 0 0 10px ${COLOR.PRIMARY}AA;
        }
    }
`;

export const LabelError = styled.label`
    display: block;
    position: relative;
`;

export const ErrorMessage = styled.span`
    position: absolute;
    bottom: 0.6rem;
    left: 0.5rem;
    font-size: 12px;
    color: ${COLOR.ERROR};
`;
