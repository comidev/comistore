import styled from "@emotion/styled";
import { COLOR } from "styles";

export const RegisterContainer = styled.section`
    width: 100%;
    max-width: 25rem;
    margin: 2rem auto;
    border-radius: 0.4rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 1rem 2rem 2rem;

    @media screen and (max-width: 551px) {
        padding: 0.5rem 0.9rem 1rem;
    }
`;

export const RegisterForm = styled.form`
    margin-top: 2rem;
    margin-bottom: 1rem;
    padding-bottom: 1rem;

    display: flex;
    flex-direction: column;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const INPUT = `
    border-radius: 0.4rem;
    background-color: ${COLOR.WHITE2};
    border: 1px solid rgba(0, 0, 0, 0.1);
    height: 2.5rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    font-size: 14px;
    width: 100%;

    &:focus-within {
        border-color: ${COLOR.PRIMARY};
        background-color: ${COLOR.WHITE};
        box-shadow: 0 0 10px ${COLOR.PRIMARY}aa;
    }
`;

export const Input = styled.input`
    ${INPUT}
`;

export const RowTwo = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    gap: 20px;
    margin-bottom: 20px;

    @media screen and (max-width: 401px) {
        grid-template-columns: 1fr;
    }
`;

export const Select = styled.select`
    ${INPUT}
    outline: 0;
`;

export const RowOne = styled.div`
    position: relative;
    margin-bottom: 20px;
`;

export const NameSpan = styled.span`
    position: absolute;
    font-size: 13px;
    top: -1.2rem;
    left: 0;
    ${({ color }) => color && `color: ${color};`}
`;

export const GeneralError = styled.span`
    color: ${COLOR.RED};
    margin: 0;
    text-align: center;
    height: 1.5rem;
`;

export const RowThree = styled.div`
    display: grid;
    width: 100%;
    position: relative;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    margin-bottom: 20px;

    @media screen and (max-width: 315px) {
        grid-template-columns: 4fr 5fr 5fr;
        gap: 3px;
    }
`;

export const GenderContainer = styled.div`
    display: grid;
    width: 100%;
    position: relative;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 5px;
    margin-bottom: 20px;

    @media screen and (max-width: 400px) {
        grid-template-columns: 1fr;
        gap: 3px;
    }
`;

export const Label = styled.label`
    ${INPUT}
    display: flex;
    align-items: center;
    width: 100%;

    span {
        margin-left: 0.2rem;
        min-width: max-content;
    }
`;
export const SaveChanges = styled.div`
    text-align: center;
    padding: 1rem 2rem;

    span {
        display: inline-block;
        font-size: 1.2rem;
        font-weight: 600;
    }

    input {
        margin: 1rem auto;
    }
`;

export const SaveChangesPassword = styled.form`
    text-align: center;
    padding: 1rem 2rem;

    span {
        display: inline-block;
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 1rem;
    }

    input {
        margin-bottom: 1rem;
    }
`;

export const ImgContainer = styled.div`
    position: relative;
    width: 5rem;
    height: 5rem;
    margin: 0 auto;
    border-radius: 50%;
    border: 3px solid rgba(0, 0, 0, 0.1);

    ${({ drag }) => {
        if (drag === "enter") {
            return `border: 3px dashed ${COLOR.PRIMARY};`;
        } else if (drag === "leaver") {
            return ``;
        } else if (drag === "drop") {
            return ``;
        }
    }}
    &:hover {
        border: 3px dashed ${COLOR.PRIMARY};
    }

    input {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        cursor: pointer;
        background-color: #f15;
        opacity: 0;
    }

    img {
        position: absolute;
        top: 0;
        z-index: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
    }
`;

export const RemoveImg = styled.button`
    position: absolute;
    top: -0.4rem;
    right: -0.4rem;
    z-index: 50;
    line-height: 0;
    border-radius: 50%;
    background-color: ${COLOR.BLACK};
    color: ${COLOR.WHITE};
    width: 1rem;
    height: 1rem;

    &:hover {
        background-color: ${COLOR.BLACK}66;
        cursor: pointer;
    }
`;
