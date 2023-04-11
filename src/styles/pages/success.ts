import { styled } from "..";

export const SuccessContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  height: "656px",

  h1: {
    fontSize: "$2xl",
    color: "$gray100",
  },

  p: {
    fontsize: "$xl",
    color: "$gray300",
    maxWidth: 560,
    textAlign: "center",
    marginTop: "2rem",
    lineHeight: 1.4,
  },

  a: {
    marginTop: "5rem",
    display: "block",
    fontSize: "$lg",
    color: "$green500",
    textDecoration: "none",
    fontWeight: "bold",

    "&:hover": {
      color: "$green300",
    },
  },
});

export const ImageContainer = styled("div", {
  height: 110,
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 9999,
  padding: "0.25rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "4rem",
  border: "1px solid $gray100",

  img: {
    objectFit: "cover",
  },

  "& + &": {
    marginLeft: "-1rem",
  },
});

export const ImagesListContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
});
