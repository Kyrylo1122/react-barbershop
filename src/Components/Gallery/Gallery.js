import "./_gallery.scss";
import galleryFirstMob from "../../img/gallery/mob/gallery1-min.jpg";
import galleryFirstMobBig from "../../img/gallery/mob/gallery1@2x-min.jpg";
import galleryFirstTablet from "../../img/gallery/tabl/tabl.gallery1-min.jpg";
import galleryFirstTabletBig from "../../img/gallery/tabl/tabl.gallery1@2x-min.jpg";
import galleryFirstDesktop from "../../img/gallery/desktop/desk.gallery.img1-min.jpg";
import galleryFirstDesktopBig from "../../img/gallery/desktop/desk.gallery.img1@2x-min.jpg";

import gallerySecondMob from "../../img/gallery/mob/gallery2-min.jpg";
import gallerySecondMobBig from "../../img/gallery/mob/gallery2@2x-min.jpg";
import gallerySecondTablet from "../../img/gallery/tabl/tabl.gallery2-min.jpg";
import gallerySecondTabletBig from "../../img/gallery/tabl/tabl.gallery2@2x-min.jpg";
import gallerySecondDesktop from "../../img/gallery/desktop/desk.gallery.img2-min.jpg";
import gallerySecondDesktopBig from "../../img/gallery/desktop/desk.gallery.img2@2x-min.jpg";

import galleryThirdMob from "../../img/gallery/mob/gallery3-min.jpg";
import galleryThirdMobBig from "../../img/gallery/mob/gallery3@2x-min.jpg";
import galleryThirdTablet from "../../img/gallery/tabl/tabl.gallery3@2x-min.jpg";
import galleryThirdTabletBig from "../../img/gallery/tabl/tabl.gallery3@2x-min.jpg";
import galleryThirdDesktop from "../../img/gallery/desktop/desk.gallery.img3-min.jpg";
import galleryThirdDesktopBig from "../../img/gallery/desktop/desk.gallery.img3@2x-min.jpg";

import galleryFourthMob from "../../img/gallery/mob/gallery4-min.jpg";
import galleryFourthMobBig from "../../img/gallery/mob/gallery4@2x-min.jpg";
import galleryFourthTablet from "../../img/gallery/tabl/tabl.gallery4-min.jpg";
import galleryFourthTabletBig from "../../img/gallery/tabl/tabl.gallery4@2x-min.jpg";
import galleryFourthDesktop from "../../img/gallery/desktop/desk.gallery.img4-min.jpg";
import galleryFourthDesktopBig from "../../img/gallery/desktop/desk.gallery.img4@2x-min.jpg";

export default function Gallery() {
  return (
    <section className="gallery section">
      <div className="container">
        <p className="pre-title gallery__pre-title">
          In Latin, "barba" means "beard"{" "}
        </p>
        <h2 className="visually-hidden">gallery</h2>
        <ul className="gallery__list">
          <li className="gallery__item">
            <picture>
              <source
                srcSet={`${galleryFirstMob} 1x, ${galleryFirstMobBig} 2x`}
                media="(max-width:768px)"
              />
              <source
                srcSet={`${galleryFirstTablet} 1x, ${galleryFirstTabletBig} 2x`}
                media="(max-width:1200px)"
              />
              <source
                srcSet={`${galleryFirstDesktop} 1x, ${galleryFirstDesktopBig} 2x`}
              />

              <img loading="lazy" src={galleryFirstMob} alt="gallery1" />
            </picture>
          </li>
          <li className="gallery__item">
            <picture>
              <source
                srcSet={`${gallerySecondMob} 1x, ${gallerySecondMobBig} 2x`}
                media="(max-width:768px)"
              />
              <source
                srcSet={`${gallerySecondTablet} 1x, ${gallerySecondTabletBig} 2x`}
                media="(max-width:1200px)"
              />
              <source
                srcSet={`${gallerySecondDesktop} 1x, ${gallerySecondDesktopBig} 2x`}
              />

              <img loading="lazy" src={gallerySecondMob} alt="gallery2 " />
            </picture>
          </li>
          <li className="gallery__item">
            <picture>
              <source
                srcSet={`${galleryThirdMob} 1x, ${galleryThirdMobBig} 2x`}
                media="(max-width:768px)"
              />
              <source
                srcSet={`${galleryThirdTablet} 1x, ${galleryThirdTabletBig} 2x`}
                media="(max-width:1200px)"
              />
              <source
                srcSet={`${galleryThirdDesktop} 1x, ${galleryThirdDesktopBig} 2x`}
              />

              <img loading="lazy" src={galleryThirdMob} alt="gallery2 " />
            </picture>
          </li>
          <li className="gallery__item">
            {" "}
            <picture>
              <source
                srcSet={`${galleryFourthMob} 1x, ${galleryFourthMobBig} 2x`}
                media="(max-width:768px)"
              />
              <source
                srcSet={`${galleryFourthTablet} 1x, ${galleryFourthTabletBig} 2x`}
                media="(max-width:1200px)"
              />
              <source
                srcSet={`${galleryFourthDesktop} 1x, ${galleryFourthDesktopBig} 2x`}
              />

              <img
                loading="lazy"
                src={galleryFourthMob}
                alt="barber cutting client's hair"
              />
            </picture>
          </li>
        </ul>
      </div>
    </section>
  );
}
