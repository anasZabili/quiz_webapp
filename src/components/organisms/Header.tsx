import { Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AppTitle from "../atoms/AppTitle";
import HeaderLink from "../atoms/HeaderLink";
import TypoGraphyBebasNeue from "../atoms/TypographyBebasNeue";

const TitleContainer = styled(Box)({
  cursor: "pointer",
  width: "min-content",
});

const StyledAppBar = styled(AppBar)({
  backgroundColor: "black",
});

const Title = styled(TypoGraphyBebasNeue)({
  margin: "1rem",
  fontSize: "3rem",
  color: "red",
  letterSpacing: "0.2rem",
  fontFamily: "Bebas Neue",
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
          <Title variant="h2">NETQUIZ</Title>
        </TitleContainer>
        <HeaderLink to="/create-quiz">Créer Quiz</HeaderLink>
        <HeaderLink to="/update-quiz">Modifier Quiz</HeaderLink>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Appbar;
