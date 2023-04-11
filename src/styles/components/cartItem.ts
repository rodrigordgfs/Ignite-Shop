import Image from "next/image";
import { styled } from "..";

export const CartItemContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: 20,
  width: "100%",
  height: "94px",

  "& + &": {
    marginTop: "24px",
  },
});

export const CartItemImageContainer = styled("div", {
  width: "94px",
  height: "94px",
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: "8px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const CartItemImage = styled(Image, {
  maxWidth: "90px",
  maxHeight: "90px",
  width: "auto",
  height: "auto",
});

export const CartItemInfo = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: 4,
  fontSize: "18px",

  h3: {
    lineHeight: "160%",
    fontWeight: 400,
    color: "$gray300",
  },

  p: {
    fontWeight: "bold",
  },

  button: {
    background: "none",
    border: "none",
    color: "$green500",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
  },
});
