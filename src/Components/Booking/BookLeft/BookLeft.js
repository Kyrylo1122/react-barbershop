import "./_bookLeft.scss";
import { toast } from "react-toastify";

export default function BookLeft() {
  return (
    <div className="book__left book__wrapp--half book__wrapp--padding">
      <h2 className="title booking__title">Booking</h2>
      <div className="booking__form">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(e.target.elements.name.value);
            toast(
              `Thanks for booking ${e.target.elements.name.value}. We will call you back!`
            );
            e.target.reset();
          }}
        >
          <div className="booking__wrap">
            <input
              type="text"
              name="name"
              placeholder="Name*"
              required
              className="booking__input"
            />
            <input
              type="tel"
              placeholder="Phone number*"
              name="tel"
              required
              className="booking__input booking__input--tel"
            />
          </div>
          <textarea
            name=""
            id=""
            className="booking__textarea"
            placeholder="message"
          ></textarea>
          <button type="submit" className="btn booking__btn">
            send
          </button>
        </form>
      </div>
    </div>
  );
}
