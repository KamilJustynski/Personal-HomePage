import {
  Wrapper,
  Avatar,
  Content,
  Person,
  ThisIs,
  Description,
  ContactButton,
} from "./styled";
import heroImage from './kamil.jpeg'
import { ReactComponent as MailIcon } from "./Message.svg";
import { email } from "../email";

export const MainContent = () => (
  <Wrapper>
    <Avatar src={heroImage} alt="Kamil Justyński" />
    <Content>
      <ThisIs>This is</ThisIs>
      <Person>Kamil Justyński</Person>
      <Description>
        💻 Hi, I am a Frontend Developer with a passion for creating interactive and modern web applications. I love to explore new technologies and improve my skills.
      </Description>
      <ContactButton href={`mailto:${email}`} title={email}>
        <MailIcon />
        Hire Me!
      </ContactButton>
    </Content>
  </Wrapper>
);
