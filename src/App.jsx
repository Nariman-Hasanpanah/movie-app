import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import PopMovieCardInfo from "./pages/PopMovieCardInfo";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movieinfo/:id" element={<PopMovieCardInfo />} />
      </Routes>
    </>
  );
};

export default App;
