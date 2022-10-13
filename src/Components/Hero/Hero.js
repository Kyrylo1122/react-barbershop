import "./_hero.scss";
export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__container">
          <div className="hero__left">
            <ul className="hero-social">
              <li className="hero-social__item">
                <a href="" className="hero-social__link">
                  Instagram
                </a>
              </li>
              <li className="hero-social__item">
                <a href="" className="hero-social__link">
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
                Мы эксперты в модных мужских стрижках. Работаем быстро,
                осторожно и со вкусом.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
