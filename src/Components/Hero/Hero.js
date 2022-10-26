import "./_hero.scss";
export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__container">
          <div className="hero__left">
            <ul className="hero-social">
              <li className="hero-social__item">
                <a
                  href="https://www.instagram.com/"
                  className="hero-social__link"
                >
                  Instagram
                </a>
              </li>
              <li className="hero-social__item">
                <a
                  href="https://www.youtube.com/"
                  className="hero-social__link"
                >
                  Youtube
                </a>
              </li>
            </ul>
          </div>
          <div className="hero__right">
            <div className="hero__content">
              <p className="pre-title hero__pre-title">
                A hair salon for men in Kyiv
              </p>
              <h1 className="hero__title title">BarberShop</h1>
              <p className="hero__post-title post-title">
                We are experts in trendy men's haircuts. We work quickly
                carefully and tastefully.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
