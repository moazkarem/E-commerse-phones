import { Route, Routes, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
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
import Verifiy from "./Pages/Verifiy/Verifiy";
import ForgetPassword from "./Pages/ForgetPassword/Forget";
import ResetPassword from "./Pages/ResetPasswprd/ResetPassword";
import Profile from "./Pages/Profile/Profile";
import Whishlist from "./Pages/Profile/Whishlist/Whishlist";
import Orders from "./Pages/Profile/Orders/Orders";
import Addresses from "./Pages/Profile/Addresses/Addresses";
import MyProfile from "./Pages/Profile/MyProfile/MyProfile";
import ChangePass from "./Pages/Profile/ChangePass/ChangePass";
import ProtectedRoute from "./auth/ProtectedRoute";

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
  const storageKey = "userData";
  const userDataString = localStorage.getItem(storageKey);
  const userData = userDataString ? JSON.parse(userDataString) : null;
  // Scroll to top on route change
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/verifiy" element={<Verifiy />} />
        <Route path="/reset-password" element={<ResetPassword />} />

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
                    <Route
                      index
                      element={
                        <ProtectedRoute
                          isAllowed={userData}
                          redirectedPath={"/login"}
                        >
                          <Cart />
                        </ProtectedRoute>
                      }
                    />
                    <Route path="checkout">
                      <Route
                        index
                        element={
                          <ProtectedRoute
                            isAllowed={userData}
                            redirectedPath={"/login"}
                          >
                            <Checkout />
                          </ProtectedRoute>
                        }
                      />
                      <Route
                        path="payment"
                        element={
                          <ProtectedRoute
                            isAllowed={userData}
                            redirectedPath={"/login"}
                          >
                            <Payment />
                          </ProtectedRoute>
                        }
                      />
                    </Route>
                  </Route>
                  <Route
                    path="profile/*"
                    element={
                      <ProtectedRoute
                        isAllowed={userData}
                        redirectedPath={"/login"}
                      >
                        <Profile />
                      </ProtectedRoute>
                    }
                  >
                    <Route
                      index
                      element={
                        <ProtectedRoute
                          isAllowed={userData}
                          redirectedPath={"/login"}
                        >
                          <MyProfile />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="orders"
                      element={
                        <ProtectedRoute
                          isAllowed={userData}
                          redirectedPath={"/login"}
                        >
                          <Orders />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="whishlist"
                      element={
                        <ProtectedRoute
                          isAllowed={userData}
                          redirectedPath={"/login"}
                        >
                          <Whishlist />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="addresses"
                      element={
                        <ProtectedRoute
                          isAllowed={userData}
                          redirectedPath={"/login"}
                        >
                          <Addresses />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="changepassword"
                      element={
                        <ProtectedRoute
                          isAllowed={userData}
                          redirectedPath={"/login"}
                        >
                          <ChangePass />
                        </ProtectedRoute>
                      }
                    />
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
            zIndex: 999999,
          },
          duration: 1500,
        }}
      />
    </>
  );
}

export default App;
