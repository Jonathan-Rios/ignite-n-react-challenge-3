import Image from "next/image";
import { Container } from "./styles";

import gitHubIcon from "@/assets/icons/github.svg";
import organizationsIcon from "@/assets/icons/organizations.svg";
import followerIcon from "@/assets/icons/followers.svg";
import arrowOutSideIcon from "@/assets/icons/arrow-outside.svg";

interface HeroProps {
  name: string;
  login: string;
  followers: string;
  bio: string;
  gitUrl: string;
}

export function Hero({ name, login, followers, bio, gitUrl }: HeroProps) {
  return (
    <Container>
      <Image
        src="https://avatars.githubusercontent.com/Jonathan-Rios"
        alt="minha foto"
        width={148}
        height={148}
        className="border-radius-100"
        color="blue"
      />

      <div>
        <section>
          <h2>{name}</h2>
          <button type="button" onClick={() => window.open(gitUrl, "_blank")}>
            GITHUB <Image src={arrowOutSideIcon} alt="ícone de saída" />
          </button>
        </section>

        <p>{bio}</p>

        <div>
          <span>
            <Image src={gitHubIcon} alt="ícone do Github" />
            {login}
          </span>

          <span>
            <Image src={organizationsIcon} alt="ícone de um prédio" />
            Rocketseat
          </span>

          <span>
            <Image src={followerIcon} alt="ícone de seguidores" />
            {`${followers} seguidores`}
          </span>
        </div>
      </div>
    </Container>
  );
}
