import "./_bookLeft.scss";
export default function BookLeft() {
  return (
    <div className="book__left book__wrapp--half book__wrapp--padding">
      <h2 className="title booking__title">Онлайн-запись</h2>
      <div className="booking__form">
        <form>
          <div className="booking__wrap">
            <input
              type="text"
              name="Имя"
              placeholder="Имя*"
              required
              className="booking__input"
            />
            <input
              type="tel"
              placeholder="Телефон*"
              name="Телефон"
              required
              className="booking__input booking__input--tel"
            />
          </div>
          <textarea
            name=""
            id=""
            className="booking__textarea"
            placeholder="сообщение"
          ></textarea>
        </form>
      </div>

      <button type="submit" className="btn booking__btn">
        отправить
      </button>
    </div>
  );
}
