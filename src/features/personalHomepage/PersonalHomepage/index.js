import { MainContent } from "./MainContent";
import { Skills } from "./Skills";
import { Container } from "./styled";
import { skills, nextSkills } from "./skillsData";
import { Portfolio } from "./Portfolio";
import { Footer } from "./Footer";
import { ThemeSwitch } from "../../../common/ThemeSwitch";

export const PersonalHomepage = () => (
  <Container>
    <ThemeSwitch />
    <MainContent />

    <main>
      <Skills title={<>My skillset includes 🛠</>} skills={skills} />
      <Skills title={<>What I want to learn next 🚀</>} skills={nextSkills} />
      <Portfolio />
    </main>

    <Footer />
  </Container>
);
