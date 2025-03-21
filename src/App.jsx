import { Route, Routes, useLocation } from "react-router-dom";
import { useLayoutEffect, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import Footer from "./Components/Layout/Footer/Footer";
import Header from "./Components/Layout/Header/Header";
import Main from "./Components/Layout/Main/Main";
import Services from "./Components/Layout/Services/Services";
import TopButton from "./Components/Layout/Top_Button/TopButton";
import Slider from "./Components/Layout/Slider/Slider";
import Blocker from "./Components/Layout/Blocker/Blocker";
import SingleCategory from "./Pages/SingleCategory/SingleCategory";
import Cart from "./Pages/Cart/Cart";
import ErrorPage from "./Pages/Error_Page/ErrorPage";
import Home from "./Pages/Home/Home";
import "./Styles/Main.scss";
import Brands from "./Pages/Brands/Brands";
import Categories from "./Pages/Categories/Categories";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Checkout from "./Pages/CheckOut/Checkout";
import Payment from "./Pages/PaymentStatus/Payment";
import Blogs from "./Pages/Blogs/Blogs";
import SingleBrand from "./Pages/SingleBrand/SingleBrand";
import About from "./Pages/About/About";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
import AllProducts from "./Pages/Products/AllProducts";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Forget from "./Pages/Forget/Forget";
import Verifiy from "./Pages/Verifiy/Verifiy";

// Layout wrapper component that includes all layout elements
function MainLayout({ children }) {
  const location = useLocation().pathname;

  return (
    <div
      className={`grid ${
        location === "/"
          ? "grid-rows-[auto,calc(100vh-55px),1fr,auto,auto]"
          : "grid-rows-[auto,1fr,auto,auto]"
      } auto-cols-fr`}
    >
      <Blocker />
      <Header />
      {location === "/" && <Slider />}
      {children}
      <Services />
      <TopButton />
      <Footer />
    </div>
  );
}

function App() {
  const location = useLocation().pathname;

  // Scroll to top on route change
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgetpassword" element={<Forget />} />
        <Route path="/verifiy" element={<Verifiy />} />

        <Route
          path="/*"
          element={
            <MainLayout>
              <Routes>
                <Route path="/" element={<Main />}>
                  <Route index element={<Home />} />
                  <Route path="categories" element={<Categories />} />
                  <Route path="about" element={<About />} />
                  <Route path="categories/:id" element={<SingleCategory />} />
                  <Route path="cart">
                    <Route index element={<Cart />} />
                    <Route path="checkout">
                      <Route index element={<Checkout />} />
                      <Route path="payment" element={<Payment />} />
                    </Route>
                  </Route>
                  <Route path="brands" element={<Brands />} />
                  <Route path="brands/:id" element={<SingleBrand />} />
                  <Route path="products" element={<AllProducts />} />
                  <Route path="products/:id" element={<SingleProduct />} />
                  <Route path="contact" element={<ContactUs />} />
                  <Route path="blogs" element={<Blogs />} />
                  <Route path="*" element={<ErrorPage />} />
                </Route>
              </Routes>
            </MainLayout>
          }
        />
      </Routes>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: "#000",
            color: "#fff",
            width: "300px",
            height: "60px",
            fontSize: "16px",
            borderRadius: "10px",
            padding: "15px",
          },
          duration: 1500,
        }}
      />
    </>
  );
}

export default App;
