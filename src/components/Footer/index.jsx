import { H3 } from "components/Title";
import { SiGmail } from "react-icons/si";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
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
                        <H3>Herramientas</H3>
                        <ul>
                            <FooterLink>React.js</FooterLink>
                            <FooterLink>Node.js</FooterLink>
                            <FooterLink>Jest</FooterLink>
                            <FooterLink>MongoDB</FooterLink>
                            <FooterLink>Mongoose</FooterLink>
                            <FooterLink>JWT y Roles</FooterLink>
                            <FooterLink>Firebase Storage</FooterLink>
                        </ul>
                    </section>
                    <section>
                        <H3>Contacto</H3>
                        <ul>
                            <FooterLink>
                                <a
                                    href="mailto:comidev.contacto@gmail.com"
                                    target="_blank">
                                    <SiGmail />
                                    <span>comidev.contacto@gmail.com</span>
                                </a>
                            </FooterLink>
                            <FooterLink>
                                <a href="https://github.com/comidev" target="_blank">
                                    <BsGithub />
                                    <span>comidev</span>
                                </a>
                            </FooterLink>
                            <FooterLink>
                                <a
                                    href="https://www.linkedin.com/in/comidev/"
                                    target="_blank">
                                    <BsLinkedin />
                                    <span>Omar Miranda</span>
                                </a>
                            </FooterLink>
                            <FooterLink>
                                <a
                                    href="https://api.whatsapp.com/send?phone=51960949984&text=Buendía."
                                    target="_blank">
                                    <BsWhatsapp />
                                    <span>(+51) 960 949 984</span>
                                </a>
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
