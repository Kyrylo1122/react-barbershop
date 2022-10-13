import "./_book.scss";
import BookLeft from "./BookLeft/BookLeft";
import BookRight from "./BookRight/BookRight";
export default function Booking() {
  return (
    <section className="book" id="book">
      <div className="container book__container">
        <div className="book__wrapp">
          <BookLeft />
          <BookRight />
        </div>
      </div>
    </section>
  );
}
