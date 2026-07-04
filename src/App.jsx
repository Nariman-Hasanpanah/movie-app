import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import PopMovieCardInfo from "./pages/PopMovieCardInfo";
import PopSerieCardInfo from "./pages/PopSerieCardInfo";
import Movies from "./pages/Movies";
import TVSeries from "./pages/TVSeries";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movieinfo/:id" element={<PopMovieCardInfo />} />
        <Route path="/tvserieinfo/:id" element={<PopSerieCardInfo />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tvseries" element={<TVSeries />} />
      </Routes>
    </>
  );
};

export default App;
