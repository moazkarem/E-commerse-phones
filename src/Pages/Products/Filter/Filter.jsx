import React, { useEffect, useRef, useState } from "react";
import style from "./style.module.scss";
import { Range, getTrackBackground } from "react-range";
import { getAllbrands, getAllCategories } from "../../../store/actions";
import { useDispatch, useSelector } from "react-redux";

const Filter = ({
  searchWord,
  setSearchWord,
  products,
  setCategoryChecked,
  setBrandChecked,
  setPriceFrom,
  setPriceTo,
  priceFrom,
  priceTo,
  setSort,
}) => {
  const [colorOptions, setColorOptions] = useState([
    {
      id: 1,
      name_en: "#D9D9D9",
      checked: true,
    },
    {
      id: 2,
      name_en: "#2B2993",
    },
    {
      id: 3,
      name_en: "#FF7513",
    },
    {
      id: 4,
      name_en: "#009CDE",
    },
    {
      id: 5,
      name_en: "#FF0000",
    },
    {
      id: 6,
      name_en: "#BFFFD9",
    },
    {
      id: 7,
      name_en: "#605A35",
    },
    {
      id: 8,
      name_en: "#FFD571",
    },
    {
      id: 9,
      name_en: "#1877F2",
    },
    {
      id: 10,
      name_en: "#F429EC",
    },
  ]);

  //============================HANDEL GET ALL CATEGORIES ===========
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categoriesRed);
  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  const handelCatChange = (e) => {
    let value = e.target.value;
    setCategoryChecked((prevState) =>
      e.target.checked
        ? [...prevState, value]
        : prevState.filter((val) => val !== value)
    );
  };
  //============================HANDEL GET ALL BRANDS ===========
  const { brands } = useSelector((state) => state.brandsRed);

  useEffect(() => {
    dispatch(getAllbrands());
  }, [dispatch]);

  const heandelBrandChange = (e) => {
    let value = e.target.value;
    setBrandChecked((val) =>
      e.target.checked
        ? [...val, value]
        : val.filter((brand) => brand !== value)
    );
  };
  //============================HANDEL SEARCH INPUT FILTERATION ===========
  const searchInputRef = useRef(null);
  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus(); // Focus on input when the component mounts
    }
  }, []);
  const handelsearchChange = (e) => {
    const value = e.target.value;
    localStorage.setItem("searchWord", value);
    setSearchWord(value);
  };
  //============================HANDEL PRICE FILTER ===========
  const [values, setValues] = useState([priceFrom, priceTo]);
  const MIN = 0;
  const MAX = 10000;
  const STEP = 1;
  const handlePriceChange = (newValues) => {
    setValues(newValues);
  };
  useEffect(() => {
    setPriceFrom(values[0]);
    setPriceTo(values[1]);
  }, [values]);
  //============================HANDEL SORT FILTER ===========
  const [selectedSort, setSelectedSort] = useState("");
  const sort = [
    "Highest Rated",
    "Best Selling",
    "Lowest Price",
    "Highest Price",
  ];
  const handelSort = (sortBy) => {
    setSelectedSort(sortBy);
    switch (sortBy) {
      case "Highest Price":
        setSort("-price");
        break;
      case "Lowest Price":
        setSort("+price");
        break;
      case "Best Selling":
        setSort("-sold");
        break;
      case "Highest Rated":
        setSort("-ratingsQuantity");
        break;
      default:
        setSort("");
    }
  };
  return (
    <div className={style["filter"]}>
      <div className="flex flex-col gap-4 w-full ">
        {/* ============================START SEARCH INPUT FILTER =========== */}
        <div className="p-4 bg-[#161819] rounded-[10px]">
          <h1 className="text-[#a9afc3] text-[22px] mb-4">Search</h1>
          <input
            ref={searchInputRef}
            placeholder="search an product"
            className="w-full ps-3 text-white text-sm border-[#6c757d] outline-none rounded-[10px] py-4"
            value={searchWord}
            onChange={handelsearchChange}
          />
          <h4 className="text-[16px] font-light capitalize text-[#ed1d24] mt-3">
            {" "}
            exist <b className="text-white mx-1">
              {products?.results}
            </b> product{" "}
          </h4>
        </div>
        {/* ============================START FILTER BY CATEGORY =========== */}
        <div className="p-4 bg-[#161819] rounded-[10px]">
          <h1 className="text-[#a9afc3] text-[22px] mb-4">Categories</h1>
          {categories?.data?.slice(0, 10)?.map((category) => (
            <div
              key={category._id}
              className="flex justify-between items-center mb-5"
            >
              <div className="flex justify-center items-center gap-2">
                <input
                  className="checked:bg-[#a61c00]"
                  type="checkbox"
                  id={category?._id}
                  name={category?.name}
                  value={category?._id}
                  onChange={handelCatChange}
                />
                <label
                  htmlFor={category?._id}
                  className="text-[#a9afc3] text-[18px]"
                >
                  {category?.name}
                </label>
              </div>
              <span className="text-[#a61c00] text-[18px]">(12)</span>
            </div>
          ))}
        </div>
        {/* ============================START FILTER BY BRAND =========== */}
        <div className="p-4 bg-[#161819] rounded-[10px]">
          <h1 className="text-[#a9afc3] text-[22px] mb-4">Brands</h1>
          {brands?.data?.slice(0, 7)?.map(({ _id, name }) => (
            <div key={_id} className="flex justify-between items-center mb-5">
              <div className="flex justify-center items-center gap-2">
                <input
                  className="checked:bg-[#a61c00]"
                  type="checkbox"
                  id={_id}
                  name={name}
                  value={_id}
                  onChange={heandelBrandChange}
                />
                <label htmlFor={_id} className="text-[#a9afc3] text-[18px]">
                  {name}
                </label>
              </div>
              <span className="text-[#a61c00] text-[18px]">(12)</span>
            </div>
          ))}
        </div>
        {/* ============================START FILTER BY PRICE =========== */}
        <div className="p-4 bg-[#161819] rounded-[10px]">
          <h1 className="text-[#a9afc3] text-[22px] mb-4">Price</h1>
          <div className="range-slider">
            <Range
              values={values}
              step={STEP}
              min={MIN}
              max={MAX}
              onChange={handlePriceChange}
              renderTrack={({ props, children }) => (
                <div
                  onMouseDown={props.onMouseDown}
                  onTouchStart={props.onTouchStart}
                  style={{
                    ...props.style,
                    height: "36px",
                    display: "flex",
                    width: "100%",
                  }}
                >
                  <div
                    ref={props.ref}
                    style={{
                      background: getTrackBackground({
                        values,
                        colors: ["#ccc", "#A61C00", "#ccc"],
                        min: MIN,
                        max: MAX,
                      }),
                    }}
                    className="slider-track"
                  >
                    {children}
                  </div>
                </div>
              )}
              renderThumb={({ index, props }) => (
                <div {...props} className="thumps">
                  <div className="labeles">{values[index]}</div>
                </div>
              )}
            />
            <div className="flex justify-between items-center mt-3 w-full ">
              <h6 className="text-sm text-[#e0e0e0]">
                From {values[0]} $ to {values[1]} $
              </h6>
              {/* <span className="filter-btn">Filter</span> */}
            </div>
          </div>
        </div>
        {/* ============================START FILTER BY SORTING =========== */}
        <div className="p-4 bg-[#161819] rounded-[10px]">
          <h1 className="text-[#a9afc3] text-[22px] mb-4">Sort By </h1>
          {sort?.map((item, idx) => (
            <div key={idx} className="flex justify-between items-center mb-5">
              <div className="flex justify-center items-center gap-2">
                <span
                  onClick={() => handelSort(item)}
                  className={`${
                    selectedSort === item ? "text-[#a61c00]" : "text-[#a9afc3]"
                  } text-[18px] cursor-pointer`}
                >
                  {item}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
