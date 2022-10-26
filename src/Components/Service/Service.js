import "./_service.scss";
export default function Service() {
  return (
    <section className="section service" id="service">
      <div className="container">
        <p className="pre-title service__pre-title">
          Spend time in the company of the best masters in the town
        </p>
        <h2 className="title service__title">Services and prices</h2>
        <div className="service__wrap">
          <ul className="service__list service__list--light">
            <li className="service__item">
              <p className="service__text service__description">
                Men's haircut{" "}
              </p>
              <span className="service__span service__text">from 300 UAH</span>
            </li>
            <li className="service__item">
              <p className="service__text service__description">beard trim </p>
              <span className="service__span service__text">from 200 UAH</span>
            </li>
            <li className="service__item">
              <p className="service__text service__description">
                Mustache haircut
              </p>
              <span className="service__span service__text">from 200 UAH</span>
            </li>
            <li className="service__item">
              <p className="service__text service__description">
                Shaving with straight razor{" "}
              </p>
              <span className="service__span service__text">from 200 UAH</span>
            </li>
          </ul>
          <ul className="service__list service__list--dark">
            <li className="service__item">
              <p className="service__text service__description">
                Intern's haircut{" "}
              </p>
              <span className="service__span service__text">from 50 UAH</span>
            </li>
            <li className="service__item">
              <p className="service__text service__description">
                Haircut under the nozzle{" "}
              </p>
              <span className="service__span service__text">from 200 UAH</span>
            </li>
            <li className="service__item">
              <p className="service__text service__description">
                Children's haircut (up to 12 years old){" "}
              </p>
              <span className="service__span service__text">from 300 UAH</span>
            </li>
            <li className="service__item">
              <p className="service__text service__description">
                Gray hair camouflage{" "}
              </p>
              <span className="service__span service__text">from 200 UAH</span>
            </li>
          </ul>
        </div>
        <div className="cl">
          <button type="button" className="btn service__btn">
            booking{" "}
          </button>
        </div>
      </div>
    </section>
  );
}
