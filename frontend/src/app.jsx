import { ThemeProvider } from "@mui/material/styles";
import { Container, CssBaseline } from "@mui/material";

import DarkTheme from "./common/themes/dark";
import Navbar from "./components/layout/navbar";
import Router from "./components/layout/router";
import Todos from "./pages/todos";
import About from "./pages/about";

const App = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <CssBaseline />

      <Container maxWidth="lg">
        <Navbar />

        <Router>
          <Router.Page path="/todos" element={<Todos />} />
          <Router.Page path="/about" element={<About />} />
        </Router>
      </Container>
    </ThemeProvider>
  );
};

export default App;
