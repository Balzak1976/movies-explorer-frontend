import './PageWithFooter.css';
import Footer from '../Footer/Footer';

function PageWithFooter({ children, isHidden }) {
  return (
    <>
      <main className="main" hidden={isHidden}>
        {children}
      </main>
      <Footer />
    </>
  );
}

export default PageWithFooter;
