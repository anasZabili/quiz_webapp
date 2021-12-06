import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

const Title = styled("h1")({
  padding: 0,
  margin: "1rem",
  fontSize: "3rem",
  color: "#f76187",
  letterSpacing: "0.2rem",
  textShadow: "0.02em 0.02em 3px #7ff5fe",
  fontFamily: "Bebas Neue",
});

const StyledButton = styled(Link)({
  textDecoration: "none",

  color: "#f76187",
  fontWeight: "bold",
  fontSize: "1.3rem",
  margin: "0.5rem",
  textShadow: "0.02em 0.02em 2px #7ff5fe",
});

const StyledAppBar = styled(AppBar)({
  backgroundColor: "black",
});

interface AppbarProps {}

const Appbar: React.FC<AppbarProps> = () => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Box flexGrow={1}>
          <Title>NETQUIZ</Title>
        </Box>
        <StyledButton to="/">Quizz</StyledButton>
        <StyledButton to="/create-quiz">Créer Quizz</StyledButton>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Appbar;
