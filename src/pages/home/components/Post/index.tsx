import { Container } from "./styles";
import { getTimeFromNow } from "@/utils/dateFormat";
import Link from "next/link";

interface PostProps {
  title: string;
  createdAt: string;
  description: string;
  url: string;
}

export function Post({ title, createdAt, description = "", url }: PostProps) {
  function getLink() {
    return url.slice(url.indexOf("/repos"));
  }

  return (
    <Container>
      <Link href={`/details${getLink()}`}>
        <div>
          <h3>{title}</h3>
          <span> {getTimeFromNow(createdAt)}</span>
        </div>

        <p>{description?.substring(0, 200) + "..."}</p>
      </Link>
    </Container>
  );
}
