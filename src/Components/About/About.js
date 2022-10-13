import tabletFirst from "../../img/about/tablet/tablet.about1-min.jpg";
import tabletFirstBig from "../../img/about/tablet/tablet.about1@2x-min.jpg";
import desktopFirst from "../../img/about/desktop/desk.about.img1-min.jpg";
import desktopFirstBig from "../../img/about/desktop/desk.about.img1@2x-min.jpg";

import tabletSec from "../../img/about/tablet/tablet.about2-min.jpg";
import tabletSecBig from "../../img/about/tablet/tablet.about2@2x-min.jpg";
import desktopSec from "../../img/about/desktop/desk.about.img2-min.jpg";
import desktopSecBig from "../../img/about/desktop/desk.about.img2@2x-min.jpg";
import "./_about.scss";
export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about__wrap">
          <div className="about-left">
            <ul className="about-left__list">
              <li className="about-left__item">
                <picture>
                  <source
                    srcset={`${tabletFirst}  1x, ${tabletFirstBig} 2x`}
                    media="(max-width:1200px)"
                  />
                  <source
                    srcset={`${desktopFirst}  1x, ${desktopFirstBig} 2x`}
                  />

                  <img src={desktopFirst} alt="бреют голову " />
                </picture>
              </li>
              <li className="about-left__item">
                <picture>
                  <source
                    srcset={`${tabletSec}  1x, ${tabletSecBig} 2x`}
                    media="(max-width:1200px)"
                  />
                  <source srcset={`${desktopSec}  1x, ${desktopSecBig} 2x`} />

                  <img src={tabletSec} alt="бреют голову " />
                </picture>
              </li>
            </ul>
          </div>
          <div className="about-right">
            <p className="pre-title">О НАС</p>
            <h2 className="title about__title">
              Лучший Барбершоп твоего города
            </h2>
            <p className="post-title about__post-title">
              Если ты хочешь добавить в свой образ больше уверенности – тебе
              точно к нам.
            </p>
            <p className="post-title about__text">
              Мы команда, которая никогда не останавливается на достигнутом и
              жаждет перемен. И когда ты попадешь в руки нашего мастера, то уже
              никогда не сможешь быть прежним. Мы команда, которая всегда с
              клиентами "на одной волне". Поэтому, мы всегда готовы
              усовершенствовать каждого, кто к нам приходит!
            </p>
            <button type="button" className="btn about__btn">
              онлайн-запись
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
