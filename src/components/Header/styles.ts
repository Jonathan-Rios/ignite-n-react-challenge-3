import { styled } from "@/styles";

export const Container = styled("header", {
  background:
    "linear-gradient(180deg, var(--colors-baseProfile), #14589c4a, var(--colors-baseProfile) )",

  height: "296px",
  width: "100%",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  div: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    width: "100%",
  },

  img: {
    // margin: "0 auto",
  },

  aside: {
    display: "flex",

    width: "30%",

    "img.img-left": {
      marginRight: "auto",
    },

    "img.img-right": {
      marginLeft: "auto",
    },
  },
});
