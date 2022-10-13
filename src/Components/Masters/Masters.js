import "./_masters.scss";

import masterFirstMob from "../../img/masters/mob/img1master1-min.jpg";
import masterFirstMobBig from "../../img/masters/mob/img1master1@2x-min.jpg";

import masterFirstTablet from "../../img/masters/tabl/img1tabl.masters-min.jpg";
import masterFirstTabletBig from "../../img/masters/tabl/img1tabl.masters@2x-min.jpg";

import masterFirstDesktop from "../../img/masters/desktop/desk.img1masters.img1-min.jpg";
import masterFirstDesktopBig from "../../img/masters/desktop/desk.img1masters.img1@2x-min.jpg";

import masterSecondMob from "../../img/masters/mob/img2master2-min.jpg";
import masterSecondMobBig from "../../img/masters/mob/img2master2@2x-min.jpg";

import masterSecondTablet from "../../img/masters/tabl/img2tabl.masters2-min.jpg";
import masterSecondTabletBig from "../../img/masters/tabl/img2tabl.masters2@2x-min.jpg";

import masterSecondDesktop from "../../img/masters/desktop/desk.img2masters.img2-min.jpg";
import masterSecondDesktopBig from "../../img/masters/desktop/desk.img2masters.img2@2x-min.jpg";

import masterThirdMob from "../../img/masters/mob/img3master3-min.jpg";
import masterThirdMobBig from "../../img/masters/mob/img3master3@2x-min.jpg";

import masterThirdTablet from "../../img/masters/tabl/img3tabl.masters3-min.jpg";
import masterThirdTabletBig from "../../img/masters/tabl/img3tabl.masters3@2x-min.jpg";

import masterThirdDesktop from "../../img/masters/desktop/desk.img3masters.img3-min.jpg";
import masterThirdDesktopBig from "../../img/masters/desktop/desk.img3masters.img3@2x-min.jpg";

import Socials from "../Socials/Socials";
export default function Masters() {
  return (
    <section className="masters" id="masters">
      <div className="container masters__container">
        <p className="pre-title masters__pre-title">
          для настоящих ценителей атмосферы
        </p>
        <h2 className="title masters__title">Наши мастера</h2>
        <ul className="masters__list">
          <li className="masters__item">
            <picture>
              <source
                srcset={`${masterFirstMob} 1x, ${masterFirstMobBig} 2x`}
                media="(max-width:768px)"
              />
              <source
                srcset={`${masterFirstTablet} 1x, ${masterFirstTabletBig} 2x`}
                media="(max-width:1200px)"
              />
              <source
                srcset={`${masterFirstDesktop} 1x, ${masterFirstDesktopBig} 2x`}
              />

              <img src={masterFirstMob} alt="master1" />
            </picture>
            <div className="card-description">
              <h3 className="card-description__title">John Smith</h3>
              <p className="card-description__text">Extreme Barber</p>
              <Socials />
            </div>
          </li>
          <li className="masters__item">
            <picture>
              <source
                srcset={`${masterSecondMob} 1x, ${masterSecondMobBig} 2x`}
                media="(max-width:768px)"
              />
              <source
                srcset={`${masterSecondTablet} 1x, ${masterSecondTabletBig} 2x`}
                media="(max-width:1200px)"
              />
              <source
                srcset={`${masterSecondDesktop} 1x, ${masterSecondDesktopBig} 2x`}
              />

              <img src={masterSecondMob} alt="master2" />
            </picture>
            <div className="card-description">
              <h3 className="card-description__title">John Smith</h3>
              <p className="card-description__text">Extreme Barber</p>
              <Socials />
            </div>
          </li>
          <li className="masters__item">
            <picture>
              <source
                srcset={`${masterThirdMob} 1x, ${masterThirdMobBig} 2x`}
                media="(max-width:768px)"
              />
              <source
                srcset={`${masterThirdTablet} 1x, ${masterThirdTabletBig} 2x`}
                media="(max-width:1200px)"
              />
              <source
                srcset={`${masterThirdDesktop} 1x, ${masterThirdDesktopBig} 2x`}
              />

              <img src={masterThirdMob} alt="master2" />
            </picture>

            <div className="card-description">
              <h3 className="card-description__title">John Smith</h3>
              <p className="card-description__text">Extreme Barber</p>

              <Socials />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
