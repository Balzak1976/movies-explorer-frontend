import './BtnBurgerWithMenuProfile.css';
import { useState } from 'react';
import BtnBurger from '../Navigation/BtnBurger/BtnBurger';
import MenuProfile from '../Navigation/MenuProfile/MenuProfile';

function BtnBurgerWithMenuProfile() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handelBtnBurgerClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="burger">
      <div className={`burger__shutter ${isMenuOpen && 'burger__shutter_active'}`} />

      <BtnBurger classMix={'btn-burger_burger '} onClick={handelBtnBurgerClick} isOpen={isMenuOpen} />

      <MenuProfile isOpen={isMenuOpen} />
    </div>
  );
}

export default BtnBurgerWithMenuProfile;
