import Hero from "../components/Hero";
import PopularMovies from "../components/PopularMovies";
import PopularTVSeries from "../components/PopularTVSeries";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <PopularMovies />
      <PopularTVSeries />
      <Footer />
    </>
  );
};

export default Home;
