import Image from "next/image";
import leftImage from "@/assets/header/left-effect.svg";
import rightImage from "@/assets/header/right-effect.svg";
import logoImage from "@/assets/logo.svg";
import { Container } from "./styles";
import { useRouter } from "next/router";

export function Header() {
  const router = useRouter();

  function handleBack() {
    router.push("/");
  }

  return (
    <Container>
      <div>
        <aside>
          <Image
            className="img-left"
            src={leftImage}
            alt="efeito de transição"
          />
        </aside>
        <Image onClick={handleBack} src={logoImage} alt="logo do site" />

        <aside>
          <Image
            className="img-right"
            src={rightImage}
            alt="efeito de transição maior"
          />
        </aside>
      </div>

      <span />
    </Container>
  );
}
