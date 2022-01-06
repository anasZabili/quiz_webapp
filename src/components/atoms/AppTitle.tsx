import { styled } from "@mui/system";

interface AppTitleProps {
  children: React.ReactNode;
}

const Title = styled("h1")({
  padding: 0,
  margin: "1rem",
  fontSize: "3rem",
  color: "red",
  letterSpacing: "0.2rem",
  // textShadow: "0.02em 0.02em 2px gray",
  fontFamily: "Bebas Neue",
  width: "fit-content",
});

const AppTitle: React.FC<AppTitleProps> = ({ children }) => {
  return <Title>{children}</Title>;
};

export default AppTitle;
