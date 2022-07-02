import { H3 } from "components/Title";
import { Link } from "react-router-dom";
import {
    FooterBody,
    FooterStyles,
    FooterFooter,
    FooterContainer,
    FooterLink,
} from "./styles";

export default function Footer() {
    return (
        <FooterStyles>
            <FooterContainer>
                <FooterBody>
                    <section>
                        <H3>Links</H3>
                        <ul>
                            <FooterLink>
                                <Link to={"home"}>Inicio</Link>
                            </FooterLink>
                            <FooterLink>
                                <Link to={"register"}>Registrarse</Link>
                            </FooterLink>
                            <FooterLink>
                                <Link to={"login"}>Iniciar sesión</Link>
                            </FooterLink>
                        </ul>
                    </section>
                    <section>
                        <H3>Contacto</H3>
                        <ul>
                            <FooterLink>
                                <a href=":mailto">comidev.contacto@gmail.com</a>
                            </FooterLink>
                            <FooterLink>
                                <a href=":mailto">Github - comidev</a>
                            </FooterLink>
                            <FooterLink>
                                <a href=":mailto">LinkedIn - Omar Miranda</a>
                            </FooterLink>
                            <FooterLink>
                                <a href="whatsapp">(+51) 960 949 984</a>
                            </FooterLink>
                        </ul>
                    </section>
                </FooterBody>
                <FooterFooter>
                    &copy; Sitio web construido por Omar Miranda
                </FooterFooter>
            </FooterContainer>
        </FooterStyles>
    );
}
