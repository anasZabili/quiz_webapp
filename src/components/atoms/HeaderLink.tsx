import { styled } from "@mui/system";
import { Link } from "react-router-dom";

interface HeaderLinkProps {
  children: React.ReactNode;
  to: string;
}

const StyledButton = styled(Link)({
  textDecoration: "none",

  color: "gray",
  fontWeight: "bold",
  fontSize: "1.3rem",
  margin: "0.5rem",
  // textShadow: "0.02em 0.02em 2px #66def6",
});

const HeaderLink: React.FC<HeaderLinkProps> = ({ children, to }) => {
  return <StyledButton to={to}>{children}</StyledButton>;
};

export default HeaderLink;
