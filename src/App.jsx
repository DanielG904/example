import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage.jsx";
import WeatherPage from "./WeatherPage.jsx";
import TriviaPage from "./TriviaPage.jsx";
import Menu from "./Menu.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Menu>
          <Link to="/">Home</Link>
          <Link to="/weather">Weather</Link>
          <Link to="/quiz">Quiz</Link>
        </Menu>
        <main className="container mt-10">
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/weather" element={<WeatherPage />}></Route>
            <Route path="/quiz" element={<TriviaPage />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
