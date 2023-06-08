import './BtnBurgerWithMenuProfile.css';
import { useState } from 'react';
import BtnBurger from '../BtnBurger/BtnBurger';
import MenuProfile from '../MenuProfile/MenuProfile';

function BtnBurgerWithMenuProfile() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handelBtnBurgerClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="hidden-menu">
      <div className={`hidden-menu__shutter ${isMenuOpen && 'hidden-menu__shutter_active'}`} />

      <BtnBurger classMix={'btn-burger_hidden-menu '} onClick={handelBtnBurgerClick} isOpen={isMenuOpen} />

      <MenuProfile isOpen={isMenuOpen} />
    </div>
  );
}

export default BtnBurgerWithMenuProfile;
