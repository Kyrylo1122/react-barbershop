import "./_service.scss";
export default function Service() {
  return (
    <section className="section service" id="service">
      <div className="container">
        <p className="pre-title service__pre-title">
          Проведи время в компании лучших мастеров
        </p>
        <h2 className="title service__title">Услуги и цены</h2>
        <div className="service__wrap">
          <ul className="service__list service__list--light">
            <li className="service__item">
              <p className="service__text service__description">
                Мужская стрижка
              </p>
              <span className="service__span service__text">от 300 грн.</span>
            </li>
            <li className="service__item">
              <p className="service__text service__description">
                Стрижка бороды
              </p>
              <span className="service__span service__text">от 200 грн.</span>
            </li>
            <li className="service__item">
              <p className="service__text service__description">Стрижка усов</p>
              <span className="service__span service__text">от 200 грн.</span>
            </li>
            <li className="service__item">
              <p className="service__text service__description">
                Бритье опасной бритвой
              </p>
              <span className="service__span service__text">от 200 грн.</span>
            </li>
          </ul>
          <ul className="service__list service__list--dark">
            <li className="service__item">
              <p className="service__text service__description">
                Cтрижка у стажера
              </p>
              <span className="service__span service__text">от 50 грн.</span>
            </li>
            <li className="service__item">
              <p className="service__text service__description">
                Стрижка под насадку
              </p>
              <span className="service__span service__text">от 200 грн.</span>
            </li>
            <li className="service__item">
              <p className="service__text service__description">
                Детская стрижка (до 12 лет)
              </p>
              <span className="service__span service__text">от 300 грн.</span>
            </li>
            <li className="service__item">
              <p className="service__text service__description">
                Камуфлирование седины
              </p>
              <span className="service__span service__text">от 200 грн.</span>
            </li>
          </ul>
        </div>
        <div className="cl">
          <button type="button" className="btn service__btn">
            онлайн-запись
          </button>
        </div>
      </div>
    </section>
  );
}
