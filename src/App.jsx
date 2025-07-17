import {
  Route,
  Routes,
  useLocation,
  BrowserRouter as Router,
} from "react-router-dom";
import { useLayoutEffect } from "react";
import { Toaster } from "react-hot-toast";
import { lazy, Suspense } from "react";

// Lazy load components
const Footer = lazy(() => import("./Components/Layout/Footer/Footer"));
const Header = lazy(() => import("./Components/Layout/Header/Header"));
const Main = lazy(() => import("./Components/Layout/Main/Main"));
const Services = lazy(() => import("./Components/Layout/Services/Services"));
const TopButton = lazy(() =>
  import("./Components/Layout/Top_Button/TopButton")
);
const Slider = lazy(() => import("./Components/Layout/Slider/Slider"));
const Blocker = lazy(() => import("./Components/Layout/Blocker/Blocker"));
const SingleCategory = lazy(() =>
  import("./Pages/SingleCategory/SingleCategory")
);
const Cart = lazy(() => import("./Pages/Cart/Cart"));
const ErrorPage = lazy(() => import("./Pages/Error_Page/ErrorPage"));
const Home = lazy(() => import("./Pages/Home/Home"));
const Brands = lazy(() => import("./Pages/Brands/Brands"));
const Categories = lazy(() => import("./Pages/Categories/Categories"));
const ContactUs = lazy(() => import("./Pages/ContactUs/ContactUs"));
const Checkout = lazy(() => import("./Pages/CheckOut/Checkout"));
const Payment = lazy(() => import("./Pages/PaymentStatus/Payment"));
const Blogs = lazy(() => import("./Pages/Blogs/Blogs"));
const SingleBrand = lazy(() => import("./Pages/SingleBrand/SingleBrand"));
const About = lazy(() => import("./Pages/About/About"));
const SingleProduct = lazy(() => import("./Pages/SingleProduct/SingleProduct"));
const AllProducts = lazy(() => import("./Pages/Products/AllProducts"));
const Login = lazy(() => import("./Pages/Login/Login"));
const Register = lazy(() => import("./Pages/Register/Register"));
const Verifiy = lazy(() => import("./Pages/Verifiy/Verifiy"));
const ForgetPassword = lazy(() => import("./Pages/ForgetPassword/Forget"));
const ResetPassword = lazy(() => import("./Pages/ResetPasswprd/ResetPassword"));
const Profile = lazy(() => import("./Pages/Profile/Profile"));
const Whishlist = lazy(() => import("./Pages/Profile/Whishlist/Whishlist"));
const Orders = lazy(() => import("./Pages/Profile/Orders/Orders"));
const Addresses = lazy(() => import("./Pages/Profile/Addresses/Addresses"));
const MyProfile = lazy(() => import("./Pages/Profile/MyProfile/MyProfile"));
const ChangePass = lazy(() => import("./Pages/Profile/ChangePass/ChangePass"));
const ProtectedRoute = lazy(() => import("./auth/ProtectedRoute"));
import "./Styles/Main.scss";
const SingleBlog = lazy(() => import("./Pages/SingleBlog/SingleBlog"));
import Loading from "./Components/Loading/Loading";

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
      {/* <Services /> */}
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
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return (
    <>
      <Suspense fallback={<Loading />}>
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
                    <Route path="blogs/:id" element={<SingleBlog />} />
                    <Route path="*" element={<ErrorPage />} />
                  </Route>
                </Routes>
              </MainLayout>
            }
          />
        </Routes>
      </Suspense>

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
            textTransform: "capitalize",
          },
          duration: 1500,
        }}
      />
    </>
  );
}

export default App;
