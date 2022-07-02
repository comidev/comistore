import styled from "@emotion/styled";
import { COLOR } from "styles";

export const RegisterContainer = styled.section`
    width: 100%;
    max-width: 25rem;
    margin: 2rem auto;
    padding: 1rem 2rem 2rem;
    border-radius: 0.4rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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
    position: relative;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-bottom: 20px;
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

    img {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
        z-index: 30;
        &:hover {
            opacity: 0.3;
        }
    }
`;

export const InputImgContai = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        height: 100%;
        width: 100%;
        border-radius: 50%;
        color: ${COLOR.BLACK};
        font-weight: 600;
    }

    input {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        z-index: 50;
        opacity: 0;
        cursor: pointer;
    }
`;
