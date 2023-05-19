import { Header } from "@/components/Header";
import { Hero } from "./components/Hero";
import { Container, Content, PostList } from "./styles";
import { Post } from "./components/Post";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/libs/axios";
import { debounce } from "@/utils/debounceQuery";
import { useCallback, useState } from "react";

const gitUser = "Jonathan-Rios";
const myRepo = "rocketseat-education/reactjs-github-blog-challenge";

interface IMyInfo {
  name: string;
  login: string;
  followers: string;
  bio: string;
  gitUrl: string;
}

interface IIssue {
  id: string;
  title: string;
  created_at: string;
  body: string;
  url: string;
}

interface IIssues {
  items: IIssue[];
}

export default function Home() {
  const [search, setSearch] = useState<string>("");

  function handleSearchChange(term: string) {
    setSearch(term);

    if (term !== "") {
      debouncedRefetch();
      return;
    }
  }

  const debouncedRefetch = useCallback(
    debounce(() => {
      refetch();
    }, 500),
    []
  );

  const { data: myInfo } = useQuery<IMyInfo>(
    ["getUsers"],
    async () => {
      const { data } = await api.get(`users/${gitUser}`);
      return data;
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  const { data: myIssues, refetch } = useQuery<IIssues>(
    ["getIssues", search],
    async () => {
      const { data } = await api.get<IIssues>(
        `search/issues?q=${search}repo:${myRepo}`
      );
      return data;
    },
    { refetchOnWindowFocus: false, enabled: search === "" }
  );

  return (
    <Container>
      <Header />

      <Content>
        <Hero
          name={myInfo?.name || ""}
          login={myInfo?.login || ""}
          followers={myInfo?.followers || ""}
          bio={myInfo?.bio || ""}
          gitUrl={myInfo?.gitUrl || ""}
        />

        <main>
          <div>
            <h3>Publicações</h3>
            <p>{myIssues?.items.length || 0} publicações</p>
          </div>

          <input
            type="text"
            placeholder="Buscar conteúdo"
            onChange={(e) => handleSearchChange(e.target.value)}
          />
        </main>

        <PostList>
          {myIssues &&
            myIssues.items.map((item) => (
              <Post
                key={item.id}
                title={item.title}
                createdAt={item.created_at}
                description={item.body}
                url={item.url}
              />
            ))}
        </PostList>
      </Content>
    </Container>
  );
}
