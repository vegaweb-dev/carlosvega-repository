import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <>
        <ThemeProvider>
          <Header />
          <Router>
            <Routes>
              <Route></Route>
            </Routes>
          </Router>
        </ThemeProvider>
    </>
  );
}

export default App;
