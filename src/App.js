import { Fragment } from "react";
import "./App.css"
// import Logo from "./images/Logo.svg";
import HeaderImage from "./images/header-main-img.png"
import Image from "./components/Image";
import Logo from "./components/Logo";
import Typography from "./components/Typography";

const App = () => {
  return (
    <Fragment>
      <header className="header">
        <div className="container">
          <nav className="header__nav">
            <Logo className={`logo`} />

            <div className="header__menu">
              <a href="#!" className="header__menu-link">Почему у нас</a>
              <a href="#!" className="header__menu-link">Меню бургеров</a>
              <a href="#!" className="header__menu-link">Оформление заказа</a>
            </div>

            <div className="header__nav-button">
              <button type="button" className="header__currentcy">$</button>
            </div>
          </nav>

          <main className="header__main">
            <div className="header__main-content">
              {/* <span className="header__main-badge">
                Новое меню
              </span> */}

              <Typography as={"span"} className={`header__main-badge`}>
                Новое меню
              </Typography>

              {/* <h1 className="title-1">
                бургер чеддер
              </h1> */}

              <Typography as={"h1"} className={`title-1`}>
                бургер чеддер
              </Typography>


              <p className="header__content-text">
                Мы обновили наше меню, спешите попробовать сезонные новинки и насладиться отличным вкусом наших бургеров. Готовим для вас лучшие бургеры в городе из отборной мраморной говядины.
              </p>

              <button className="header__main-content__button">
                Смотреть меню
              </button>
            </div>

            {/* <div className="header__main-img">
              <img src={HeaderImage} alt="error" />
            </div> */}

            <Image
              className={`header__main-img`}
              src={HeaderImage}
              alt={`Error 404`}
              srcSet={HeaderImage}
            />
          </main>
        </div>
      </header>
    </Fragment>
  )
}

export default App;