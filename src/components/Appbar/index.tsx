import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const TitleContainer = styled(Box)({
  cursor: "pointer",
});

const Title = styled("h1")({
  padding: 0,
  margin: "1rem",
  fontSize: "3rem",
  color: "red",
  letterSpacing: "0.2rem",
  // textShadow: "0.02em 0.02em 2px gray",
  fontFamily: "Bebas Neue",
});

const StyledButton = styled(Link)({
  textDecoration: "none",

  color: "gray",
  fontWeight: "bold",
  fontSize: "1.3rem",
  margin: "0.5rem",
  // textShadow: "0.02em 0.02em 2px #66def6",
});

const StyledAppBar = styled(AppBar)({
  backgroundColor: "black",
});

interface AppbarProps {}

const Appbar: React.FC<AppbarProps> = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <TitleContainer onClick={handleClick} flexGrow={1}>
          <Title>NETQUIZ</Title>
        </TitleContainer>
        <StyledButton to="/">Quiz</StyledButton>
        <StyledButton to="/create-quiz">Créer Quiz</StyledButton>
        <StyledButton to="/update-quiz">Modifier Quiz</StyledButton>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Appbar;
