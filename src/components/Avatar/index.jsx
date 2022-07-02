import styled from "@emotion/styled";
import { COLOR } from "styles";

const AvatarContainer = styled.div`
    border-radius: 9999px;
    background-color: ${COLOR.WHITE};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
    display: flex;
    cursor: pointer;
    &:hover {
        background-color: ${COLOR.WHITE2};
    }
`;

const AvatarImg = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    overflow: hidden;

    img {
        /* // TODO: COVER O CONTAINER ? */
        height: 100%;
        object-fit: cover;
    }
`;

const AvatarInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-left: 0.5rem;
    font-size: 14px;
    padding-right: 10px;
`;

const AvatarName = styled.span`
    color: ${COLOR.BLACK};
    font-weight: 600;
`;
const AvatarUsername = styled.span`
    color: ${COLOR.TEXT.BLACK};
`;

export default function Avatar({ photoUrl, username, name, onClick }) {
    return (
        <AvatarContainer onClick={onClick}>
            <AvatarImg>
                <img src={photoUrl} alt="Perfil" width={10} height={10} />
            </AvatarImg>
            <AvatarInfo>
                <AvatarName>{name}</AvatarName>
                <AvatarUsername>@{username}</AvatarUsername>
            </AvatarInfo>
        </AvatarContainer>
    );
}
