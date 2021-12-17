import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateQuiz from "./pages/CreateQuiz";
import PlayQuiz from "./pages/PlayQuiz";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#eef3f8",
    },
  },
});

function App() {
  return (
    <div className="App">
      <Router>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-quiz" element={<CreateQuiz />} />
            <Route path="/play-quiz/:quizId" element={<PlayQuiz />} />
          </Routes>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
