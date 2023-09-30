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
        💻 Hi, I am a Junior Frontend Developer with one year experience. I am
        looking for my first job and programming challenges. I want to explore
        new technologies, improve my skills and gain knowledge among other
        programmers.
      </Description>
      <ContactButton href={`mailto:${email}`} title={email}>
        <MailIcon />
        Hire Me!
      </ContactButton>
    </Content>
  </Wrapper>
);
