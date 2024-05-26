import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Home from '../pages/Home';

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Home />
      </Main>
      <Footer />
    </>
  );
};
export default App;