import "./_reason.scss";
export default function Reason() {
  return (
    <section className="section reason" id="reason">
      <div className="container">
        <div className="reason__wrapp">
          <div className="reason__container">
            <p className="pre-title">старая традиционная школа</p>
            <h2 className="title reason__title">
              Почему приходят именно к нам?
            </h2>
            <p className="post-title reason__post-title">
              О нас говорят только хорошее. Но лучше 1 раз увидеть и
              прочувствовать, чем 10 раз прочитать.
            </p>
          </div>

          <div className="reason-set__wrap">
            <ul className="reason-set">
              <li className="reason-set__item">
                <div className="reason-set__container">
                  <h3 className="reason-set__title">600</h3>
                  <p className="reason-set__text">Довольных клиентов в день</p>
                </div>
              </li>
              <li className="reason-set__item">
                <div className="reason-set__container">
                  <h3 className="reason-set__title">50</h3>
                  <p className="reason-set__text">Наград за отличный сервис</p>
                </div>
              </li>
              <li className="reason-set__item">
                <div className="reason-set__container">
                  <h3 className="reason-set__title">20</h3>
                  <p className="reason-set__text">Лучших мастеров Киева</p>
                </div>
              </li>
              <li className="reason-set__item">
                <div className="reason-set__container">
                  <h3 className="reason-set__title">100</h3>
                  <p className="reason-set__text">
                    Подарков постоянным клиентам
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
