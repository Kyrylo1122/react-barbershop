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
                    srcSet={`${tabletFirst}  1x, ${tabletFirstBig} 2x`}
                    media="(max-width:1200px)"
                  />
                  <source
                    srcSet={`${desktopFirst}  1x, ${desktopFirstBig} 2x`}
                  />

                  <img
                    loading="lazy"
                    src={desktopFirst}
                    alt="shave off beards "
                  />
                </picture>
              </li>
              <li className="about-left__item">
                <picture>
                  <source
                    srcSet={`${tabletSec}  1x, ${tabletSecBig} 2x`}
                    media="(max-width:1200px)"
                  />
                  <source srcSet={`${desktopSec}  1x, ${desktopSecBig} 2x`} />

                  <img loading="lazy" src={tabletSec} alt="shave off beards" />
                </picture>
              </li>
            </ul>
          </div>
          <div className="about-right">
            <p className="pre-title">ABOUT</p>
            <h2 className="title about__title">
              The best barbershop in your city
            </h2>
            <p className="post-title about__post-title">
              If you want to add more confidence to your image - you should
              definitely contact us.
            </p>
            <p className="post-title about__text">
              We are a team that never rests on its laurels and yearns for
              change. And when you fall into the hands of our master, then you
              can never be the same. We are a team that is always on the same
              wavelength with clients. Therefore, we are always ready to improve
              everyone who contacts us!
            </p>
            <button type="button" className="btn about__btn">
              Booking
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
