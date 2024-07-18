import "./Header.css"
import { Link } from 'react-router-dom';
import plane from '../../images/test.png';
import avatar from '../../images/raccoon-dance.gif'

function Header() {
  return (
    <header className="header">
      {/* <img src={ plane } className="plane" /> */}
      <Link to={ "/" }>
        <div className="header__logo">
          <h1 className="header__logo-title">RFI croc ru</h1>
        </div>
      </Link>
      <nav className="header__nav">
        <Link to="/" className="header__nav-link"><span className="header__nav-link-text">Главная</span></Link>
        <Link to="/" className="header__nav-link"><span className="header__nav-link-text">Выдача прав</span></Link>
        <Link to="/" className="header__nav-link"><span className="header__nav-link-text">Стандарты оборудования</span></Link>
        <Link to="/" className="header__nav-link"><span className="header__nav-link-text">Выгрузка из наличия</span></Link>
        <Link to="/" className="header__nav-link"><span className="header__nav-link-text">Запрос по стандарту</span></Link>
        <Link to="/" className="header__nav-link"><span className="header__nav-link-text">Инструкция по выходу</span></Link>
        <Link to="/" className="header__nav-link"><span className="header__nav-link-text">Перевод в штат</span></Link>
      </nav>
      <div className="header__user-info">
          <h3 className="header__username">User name</h3>
          <img className="header__avatar" src={ avatar } />
      </div>
    </header>
  )
}

export default Header;