import { styled } from "@mui/system";

const Title = styled("h2")({
  fontSize: "1.3rem",
  fontWeight: "bold",
  color: "#eef3f8",
});

interface H2BoldProps {
  children: React.ReactNode;
}

const H2Bold: React.FC<H2BoldProps> = ({ children }) => {
  return <Title>{children}</Title>;
};

export default H2Bold;
