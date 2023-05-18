import './App.css';
import Header from '../parts/Header/Header';
import Footer from '../parts/Footer/Footer';

function App() {
  return (
    <div className="app">
      <div className="page">
        <Header
          // loggedIn={loggedIn}
          // userData={email}
          // onSignOut={handleSignOut}
        />

        <div className="wrapper"></div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
