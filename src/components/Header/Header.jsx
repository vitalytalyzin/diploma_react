import React from 'react';
import headerLogo from '../../img/headerLogo.png';
import Navigation from '../Navigation';
import './Header.css';

const Header = () => {

  const navTitles = [
    {
      title: 'Главная',
      path: '/',
    },
    {
      title: 'Каталог',
      path: '/catalog',
    },
    {
      title: 'О Магазине',
      path: '/about',
    },
    {
      title: 'Контакты',
      path: '/contacts',
    },
  ];

  return (
    <header className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <a className="navbar-brand" href="/">
              <img src={headerLogo} alt="Bosa Noga" />
            </a>
            <div className="collapase navbar-collapse">
              <ul className="navbar-nav mr-auto">
               <Navigation navItems={navTitles} />
              </ul>
              <div>
                <div className="header-controls-pics">
                  <div data-id="search-expander" className="header-controls-pic header-controls-search" />
                  <div className="header-controls-pic header-controls-cart">
                    <div className="header-controls-cart-full">1</div>
                    <div className="header-controls-cart-menu" />
                  </div>
                </div>
                <form data-id="search-form" className="header-controls-search-form form-inline invisible">
                  <input className="form-control" placeholder="Поиск" />
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
