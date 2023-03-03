import { styled } from "../styles";

const Button = styled("button", {
  backgroundColor: "$green",
  border: "none",
  borderRadius: 4,
  padding: "8px 16px",
  span: {
    color: "#fff",
  },
  "&:hover": {
    filter: "brightness(0.9)",
  },
});

export default function Home() {
  return (
    <Button>
      <span>Hello World</span>
    </Button>
  );
}
