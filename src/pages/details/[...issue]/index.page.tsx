import { Header } from "@/components/Header";
import { Container, Content, PostContent } from "./styles";
import { PostInfo } from "./components/PostInfo";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/libs/axios";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/router";

export default function Details() {
  const router = useRouter();

  const issue = router.query.issue as string[];

  const { data: issueInfo } = useQuery(["getDetails"], async () => {
    const response = await api.get(`${issue.join("/")}`);
    return response.data;
  });

  return (
    <Container>
      <Header />

      <Content>
        <PostInfo
          title={issueInfo?.title || ""}
          createdAt={issueInfo?.created_at || ""}
          numberOfComments={issueInfo?.comments || 0}
          login={issueInfo?.user.login || ""}
          gitUrl={issueInfo?.user?.html_url || ""}
        />

        <PostContent>
          <ReactMarkdown>{issueInfo?.body || ""}</ReactMarkdown>
        </PostContent>
      </Content>
    </Container>
  );
}
