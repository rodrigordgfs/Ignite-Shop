import Image from "next/image";
import { styled } from "..";

export const CartDrawerContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "36px",
  maxHeight: "100vh",
  height: "100%",
  width: "400px",
  padding: "16px",
  backgroundColor: "$gray800",
});

export const CloseCartDrawerButton = styled(Image, {
  cursor: "pointer",
});

export const TitleCartDrawer = styled("h2", {
  fontSize: "1.25rem",
  lineHeight: "160%",
  fontWeight: "bold",
  color: "$gray100",
});

export const CartDrawerInfo = styled("div", {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "32px",
});

export const CartQuantity = styled("p", {
  fontSize: "1.125rem",
  color: "$gray300",
  lineHeight: "160%",
});

export const TotalValue = styled("p", {
  fontSize: "1.5rem",
  lineHeight: "140%",
  fontWeight: "bold",
  color: "$gray300",
});

export const CheckoutButton = styled("button", {
  width: "100%",
  height: "69px",
  background: "$green500",
  borderRadius: "8px",
  border: "none",
  color: "$gray100",
  fontSize: "1.125rem",
  fontWeight: "bold",
  lineHeight: "160%",
  cursor: "pointer",
});
