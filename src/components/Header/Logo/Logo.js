import './Logo.css';
import { ReactComponent as LogoSvg } from '../../../images/logo.svg';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to="/">
      <LogoSvg className="logo" />
    </Link>
  );
}

export default Logo;
