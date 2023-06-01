import './PageWithFooter.css';
import Footer from '../Footer/Footer';

function PageWithFooter({ children }) {
  return (
    <>
      <div className="wrapper">{children}</div>
      <Footer />
    </>
  );
}

export default PageWithFooter;
