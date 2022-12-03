import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {

  return (<div className="App">
      <header className="App-header">
        <h1>Грузинский с Параскевой</h1>
          <ul className="nav-bar">
       
           <li>
              <NavLink className="header__item" to="/">
                Главная
              </NavLink>
           </li>
            <li>
              <NavLink className="header__item" to="/lessons">
              Занятия
              </NavLink>
            </li>
            <li>
              <NavLink className="header__item" to="/team">
              Команда
              </NavLink>
            </li>
            <li>
              <NavLink className="header__item" to="/reviews">
              Отзывы
              </NavLink>
            </li>
             </ul>
      </header>
      </div>
)
    }
export default Header;