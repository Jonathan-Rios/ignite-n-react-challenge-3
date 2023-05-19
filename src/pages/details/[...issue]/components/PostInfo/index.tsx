import Image from "next/image";
import { Container } from "./styles";

import gitHubIcon from "@/assets/icons/github.svg";
import calendarIcon from "@/assets/icons/calendar.svg";
import commentIcon from "@/assets/icons/comment.svg";
import arrowOutSideIcon from "@/assets/icons/arrow-outside.svg";
import arrowLeftIcon from "@/assets/icons/arrow-left.svg";
import { getTimeFromNow } from "@/utils/dateFormat";
import { useRouter } from "next/router";

interface PostInfoProps {
  title: string;
  createdAt: string;
  numberOfComments: number;
  login: string;
  gitUrl: string;
}

export function PostInfo({
  title,
  createdAt,
  numberOfComments,
  login,
  gitUrl,
}: PostInfoProps) {
  const router = useRouter();

  function handleBack() {
    router.push("/");
  }

  return (
    <Container>
      <section>
        <button type="button" onClick={handleBack}>
          <Image src={arrowLeftIcon} alt="ícone de voltar" /> VOLTAR
        </button>

        <button type="button" onClick={() => window.open(gitUrl, "_blank")}>
          GITHUB <Image src={arrowOutSideIcon} alt="ícone de saída" />
        </button>
      </section>

      <h3>{title}</h3>

      <div>
        <span>
          <Image src={gitHubIcon} alt="ícone do Github" />
          {login}
        </span>

        <span>
          <Image src={calendarIcon} alt="ícone de um prédio" />
          {getTimeFromNow(createdAt)}
        </span>

        <span>
          <Image src={commentIcon} alt="ícone de seguidores" />
          {numberOfComments} comentários
        </span>
      </div>
    </Container>
  );
}
