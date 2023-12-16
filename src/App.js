import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";

import Home from "./pages/homepage/Home.jsx";
import Shop from "./pages/shoppage/Shop.jsx";
import About from "./pages/aboutpage/About.jsx";
import Checkout from "./pages/cartpage/Checkout.jsx";

import ScrollToTop from "./components/scroll-to-top/scroll-to-top";

import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <ScrollToTop />
          <Home />
          <Footer />
        </Route>
        <Route path="/shop">
          <ScrollToTop />
          <Shop />
          <Footer />
        </Route>
        <Route path="/about">
          <About />
          <Footer />
        </Route>
        <Route path="/cart">
          <ScrollToTop />
          <Checkout />
          <Footer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
