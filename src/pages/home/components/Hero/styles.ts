import { styled } from "@/styles";

export const Container = styled("div", {
  display: "flex",
  gap: "2rem", // 32px

  marginTop: "-88px",

  padding: "32px 40px",
  width: "100%",
  backgroundColor: "$baseProfile",
  borderRadius: "10px",
  boxShadow: "0px 2px 28px rgba(0, 0, 0, 0.2)",

  "& > img": {
    borderRadius: "8px",
  },

  "& > div": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",

    "& > section": {
      display: "flex",
      marginBottom: "0.5rem", // 8px

      "& > h2": {
        fontSize: "$_24",
      },

      "& > button": {
        all: "unset",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.25rem", // 4px

        marginLeft: "auto",
        marginBottom: "auto",

        fontSize: "$_12",
        fontWeight: "bold",
        color: "$blue",

        cursor: "pointer",

        img: {
          width: "12px",
          height: "12px",
          marginBottom: "2px",

          filter:
            "brightness(0) saturate(100%) invert(46%) sepia(65%) saturate(2145%) hue-rotate(191deg) brightness(102%) contrast(94%)",
        },
      },
    },

    "& > p": {
      marginBottom: "1.5rem", // 24px
      fontSize: "$_16",
    },

    "& > div": {
      display: "flex",
      gap: "1.5rem", // 24px

      "& > span": {
        display: "flex",
        alignItems: "center",

        gap: "0.5rem", // 8px

        img: {
          width: "18px",
          height: "18px",

          filter:
            "brightness(0) saturate(100%) invert(29%) sepia(33%) saturate(532%) hue-rotate(168deg) brightness(95%) contrast(91%)",
        },
      },
    },
  },
});
