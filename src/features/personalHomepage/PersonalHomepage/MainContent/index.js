import {
  Wrapper,
  Avatar,
  Content,
  Person,
  ThisIs,
  Description,
  ContactButton,
} from "./styled";
import heroImage from "./heroImage.png";
import { ReactComponent as MailIcon } from "./Message.svg";
import { email } from "../email";

export const MainContent = () => (
  <Wrapper>
    <Avatar src={heroImage} alt="Kamil Justyński" />
    <Content>
      <ThisIs>This is</ThisIs>
      <Person>Kamil Justyński</Person>
      <Description>
        💻 I am a Junior Frontend Developer with one year of experience looking
        for new programming challenges. I am currently looking for my first job
        where I can explore new technologies and improve my skills and among
        better programmers.
      </Description>
      <ContactButton href={`mailto:${email}`} title={email}>
        <MailIcon />
        Hire Me!
      </ContactButton>
    </Content>
  </Wrapper>
);
