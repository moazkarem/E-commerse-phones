import { useCallback, useEffect, useRef, useState } from "react";
import Filter from "./Filter/Filter";
import { useSelector } from "react-redux";

const Drawer = ({ isDrawerOpen, setIsDrawerOpen }) => {
  const { products } = useSelector((state) => state.productsRed);

  const [searchWord, setSearchWord] = useState(
    localStorage.getItem("searchWord") || ""
  );
  const [categoryChecked, setCategoryChecked] = useState([]);
  const [brandChecked, setBrandChecked] = useState([]);
  const [priceFrom, setPriceFrom] = useState(0);
  const [priceTo, setPriceTo] = useState(5000);
  const [sort, setSort] = useState("");
  const sideRef = useRef(null);

  const closeDrawer = useCallback(() => {
    setIsDrawerOpen(false);
  }, [setIsDrawerOpen]);

  const handleClickOutside = useCallback(
    (event) => {
      if (sideRef.current && !sideRef.current.contains(event.target)) {
        closeDrawer();
      }
    },
    [closeDrawer]
  );

  useEffect(() => {
    if (isDrawerOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside, isDrawerOpen]);

  if (!isDrawerOpen) return null;

  return (
    <div className="fixed inset-0 z-[60000] flex transition-all ease-out delay-300">
      <div className="absolute  inset-0 bg-black/50" />
      <div
        ref={sideRef}
        className="relative z-10 w-[80%]  bg-[#161819] p-4 overflow-auto"
      >
        <div className="w-full flex justify-end">
          <button
            onClick={closeDrawer}
            aria-label="Close drawer"
            className="mb-4 text-white bg-black rounded-full w-10 h-10 flex items-center justify-center"
          >
            ✕
          </button>
        </div>

        <Filter
          searchWord={searchWord}
          setSearchWord={setSearchWord}
          products={products}
          categoryChecked={categoryChecked}
          setCategoryChecked={setCategoryChecked}
          setBrandChecked={setBrandChecked}
          setPriceFrom={setPriceFrom}
          setPriceTo={setPriceTo}
          priceTo={priceTo}
          priceFrom={priceFrom}
          setSort={setSort}
        />
      </div>

      <div className="flex-1" />
    </div>
  );
};

export default Drawer;
