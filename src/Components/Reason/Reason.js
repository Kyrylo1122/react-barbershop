import "./_reason.scss";
export default function Reason() {
  return (
    <section className="section reason" id="reason">
      <div className="container">
        <div className="reason__wrapp">
          <div className="reason__container">
            <p className="pre-title">old traditional school</p>
            <h2 className="title reason__title">
              Why do customers come to us?{" "}
            </h2>
            <p className="post-title reason__post-title">
              They say only good things about us but it's better once to see and
              to feel than to read 10 times.
            </p>
          </div>

          <div className="reason-set__wrap">
            <ul className="reason-set">
              <li className="reason-set__item">
                <div className="reason-set__container">
                  <h3 className="reason-set__title">600</h3>
                  <p className="reason-set__text">
                    Satisfied customers per day
                  </p>
                </div>
              </li>
              <li className="reason-set__item">
                <div className="reason-set__container">
                  <h3 className="reason-set__title">50</h3>
                  <p className="reason-set__text">Excellent Service Awards</p>
                </div>
              </li>
              <li className="reason-set__item">
                <div className="reason-set__container">
                  <h3 className="reason-set__title">20</h3>
                  <p className="reason-set__text">The best masters of Kyiv</p>
                </div>
              </li>
              <li className="reason-set__item">
                <div className="reason-set__container">
                  <h3 className="reason-set__title">100</h3>
                  <p className="reason-set__text">
                    Gifts for regular customers{" "}
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
