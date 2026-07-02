import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import PopMovieCardInfo from "./pages/PopMovieCardInfo";
import PopSerieCardInfo from "./pages/PopSerieCardInfo";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movieinfo/:id" element={<PopMovieCardInfo />} />
        <Route path="/tvserieinfo/:id" element={<PopSerieCardInfo />} />
      </Routes>
    </>
  );
};

export default App;
