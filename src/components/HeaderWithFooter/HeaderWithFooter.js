import './HeaderWithFooter.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function HeaderWithFooter({ loggedIn, children }) {
  return (
    <>
      <Header
        loggedIn={loggedIn}
        // userData={email}
        // onSignOut={handleSignOut}
      />
      <div className="wrapper">{children}</div>
      <Footer />
    </>
  );
}

export default HeaderWithFooter;
