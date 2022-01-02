import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AppTitle from "../atoms/AppTitle";
import HeaderLink from "../atoms/HeaderLink";

const TitleContainer = styled(Box)({
  cursor: "pointer",
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
          <AppTitle>NETQUIZ</AppTitle>
        </TitleContainer>
        <HeaderLink to="/">Quizz</HeaderLink>
        <HeaderLink to="/create-quiz">Créer Quizz</HeaderLink>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Appbar;
