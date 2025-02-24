// React Router
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";

// Layout
import Footer from "./Components/Layout/Footer/Footer";
import Header from "./Components/Layout/Header/Header";
import Main from "./Components/Layout/Main/Main";
import Services from "./Components/Layout/Services/Services";
import TopButton from "./Components/Layout/Top_Button/TopButton";
import Slider from "./Components/Layout/Slider/Slider";
import Blocker from "./Components/Layout/Blocker/Blocker";

// Pages
import SingleCategory from "./Pages/SingleCategory/SingleCategory";
import Cart from "./Pages/Cart/Cart";
import ErrorPage from "./Pages/Error_Page/ErrorPage";
import Home from "./Pages/Home/Home";
// Template
// import Template from "./Template";

// Main Style Sheet
import "./Styles/Main.scss";
// import TopScroll from "./Components/Top_Scroll/TopScroll";
import Brands from "./Pages/Brands/Brands";
import Categories from "./Pages/Categories/Categories";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Checkout from "./Pages/CheckOut/Checkout";
import Payment from "./Pages/PaymentStatus/Payment";
import Blogs from "./Pages/Blogs/Blogs";
function App() {
  const location = useLocation().pathname.slice(1);
  return (
    <div
      className={`grid ${
        location === ""
          ? "grid-rows-[auto,calc(100vh-55px),1fr,auto,auto]"
          : "grid-rows-[auto,1fr,auto,auto]"
      } auto-cols-fr`}
    >
      {/* TopScroll */}
      {/* <TopScroll /> */}
      {/* LayOut */}
      <Blocker />
      <Header />
      {location === "" ? <Slider /> : null}
      {/* Pages */}
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
         
            <Route path="categories" element={<Categories />} />
            <Route path="categories/:id" element={<SingleCategory />} />
      
       
          <Route path="cart" >
            <Route index element={<Cart />} />
            <Route path="checkout"  >
              <Route index element={<Checkout />} />
              <Route path="payment" element={<Payment />} />
             
            </Route>
          </Route>
          <Route path="brands" element={<Brands />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="Blogs" element={<Blogs />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      <Services />
      <TopButton />
      <Footer />
      {/* Template */}
      {/* <Template /> */}
    </div>
  );
}
export default App;
