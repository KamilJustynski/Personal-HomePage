import {
  HeroContainer,
  HeroImage,
  HeroContent,
  Person,
  Admission,
  Description,
  ContactButton,
} from "./styled";
import heroImage from "../images/heroImage.png";

export const Hero = () => {
  return (
    <HeroContainer>
      <HeroImage src={heroImage} alt="Photo of Kamil" />
      <HeroContent>
        <Admission>THIS IS</Admission>
        <Person>KAMIL JUSTYŃSKI</Person>
        <Description>
          💻 I am a Junior Frontend Developer with one year of experience
          looking for new programming challenges. I am currently looking for my
          first job where I can explore new technologies and improve my skills
          and among better programmers.
        </Description>
        <ContactButton>
          <ion-icon name="mail-outline"></ion-icon>
          Hire Me!
        </ContactButton>
      </HeroContent>
    </HeroContainer>
  );
};
