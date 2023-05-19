import { styled } from "@/styles";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",

  a: {
    textDecoration: "none",
    color: "$baseText",

    padding: "2rem", // 32px
  },

  backgroundColor: "$basePost",
  gap: "1.25rem", // 20px
  borderRadius: "10px",

  div: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    lineHeight: "1.5rem", // 24px

    h3: {
      fontSize: "$_20",
      fontWeight: "bold",
      color: "$baseTitle",
      maxWidth: "250px",
    },
  },

  p: {
    fontSize: "$_16",
    color: "$baseText",
  },
});
