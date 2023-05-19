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

  main: {
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem", // 12px

    marginTop: "4.5rem", // 72px

    div: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },

    input: {
      all: "unset",

      height: "50px",

      padding: "0 1rem", // 16px
      borderRadius: "8px",

      fontSize: "$_16",
      color: "$baseText",

      backgroundColor: "$baseInput",
      border: "1px solid $baseBorder",

      "&::placeholder": {
        color: "$baseLabel",
      },
    },
  },
});

export const PostList = styled("section", {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  marginTop: "3rem", //  48px

  gap: "2rem", // 32px
});
