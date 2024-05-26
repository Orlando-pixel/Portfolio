import Header from "../components/header";
import Main from "../components/main";
import Footer from "../components/footer";
import './home.css';

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;