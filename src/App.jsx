import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import PopMovieCardInfo from "./pages/PopMovieCardInfo";
import PopSerieCardInfo from "./pages/PopSerieCardInfo";
import Movies from "./pages/Movies";
import TVSeries from "./pages/TVSeries";
import Search from "./pages/Search";
import SignIn from "./pages/forms/SignIn";
import SignUp from "./pages/forms/SignUp";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movieinfo/:id" element={<PopMovieCardInfo />} />
        <Route path="/tvserieinfo/:id" element={<PopSerieCardInfo />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tvseries" element={<TVSeries />} />
        <Route path="/search/:query" element={<Search />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default App;
