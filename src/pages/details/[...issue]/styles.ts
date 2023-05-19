import { styled } from "@/styles";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  width: "100%",
});

export const Content = styled("div", {
  width: "864px",
});

export const PostContent = styled("section", {
  display: "flex",
  flexDirection: "column",
  padding: "2rem", // 32px
});
