import { styleIcon } from "./styled";
import { ReactComponent as GithubIcon } from "./icons/github.svg";
import { ReactComponent as FacebookIcon } from "./icons/facebook.svg";
import { ReactComponent as LinkedinIcon } from "./icons/linkedin.svg";
import { ReactComponent as InstagramIcon } from "./icons/instagram.svg";

export const socials = [
  {
    name: "Github",
    url: "https://github.com/R0galKJ",
    Icon: styleIcon(GithubIcon),
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/kamil.justynski",
    Icon: styleIcon(FacebookIcon),
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/kamil-justy%C5%84ski/",
    Icon: styleIcon(LinkedinIcon),
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/k_justysx/",
    Icon: styleIcon(InstagramIcon),
  },
];
