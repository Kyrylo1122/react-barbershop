import "./App.css";
import About from "./Components/About/About";
import Booking from "./Components/Booking/Booking";
import Footer from "./Components/Footer/Footer";
import Gallery from "./Components/Gallery/Gallery";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Masters from "./Components/Masters/Masters";
import Reason from "./Components/Reason/Reason";
import Service from "./Components/Service/Service";
import "./main.scss";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Header />
      <Hero />
      <About />
      <Service />
      <Reason />
      <Masters />
      <Gallery />
      <Booking />
      <Footer />
    </div>
  );
}

export default App;
