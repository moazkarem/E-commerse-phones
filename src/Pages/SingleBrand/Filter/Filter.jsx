import React, { useState } from "react";
import style from "./style.module.scss";
import { Range, getTrackBackground } from "react-range";

const Filter = () => {
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
  const [values, setValues] = useState([40, 200]);
  const STEP = 1;
  const MIN = 0;
  const MAX = 400;

  const handleChange = (newValues) => {
    setValues(newValues);
  };
  return (
    <div className={style["filter"]}>
      <div className="flex flex-col gap-6 w-full ">
        <div className="p-4 bg-[#161819] rounded-[10px]">
          <h1 className="text-[#a9afc3] text-[22px] mb-4">Categories</h1>
          {Array.from({ length: 6 }, (_, idx) => (
            <div key={idx} className="flex justify-between items-center mb-5">
              <div className="flex justify-center items-center gap-2">
                <input
                  type="checkbox"
                  id={`electronics-${idx}`}
                  name={`electronics-${idx}`}
                  className="checked:bg-[#a61c00]"
                />
                <label
                  htmlFor={`electronics-${idx}`}
                  className="text-[#a9afc3] text-[18px] max-[992px]:!text-[16px]"
                >
                  Electronics {idx + 1}
                </label>
              </div>
              <span className="text-[#a61c00] text-[18px]">(12)</span>
            </div>
          ))}
        </div>
        <div className="p-4 bg-[#161819] rounded-[10px]">
          <h1 className="text-[#a9afc3] text-[22px] mb-4">Latest</h1>
          {Array.from({ length: 6 }, (_, idx) => (
            <div key={idx} className="flex justify-between items-center mb-5">
              <div className="flex justify-center items-center gap-2">
                <input
                  type="checkbox"
                  id={`electronics-${idx}`}
                  name={`electronics-${idx}`}
                  className="checked:bg-[#a61c00]"
                />
                <label
                  htmlFor={`electronics-${idx}`}
                  className="text-[#a9afc3] text-[18px]"
                >
                  Electronics {idx + 1}
                </label>
              </div>
              <span className="text-[#a61c00] text-[18px]">(12)</span>
            </div>
          ))}
        </div>
        <div className="p-4 bg-[#161819] rounded-[10px]">
        <h1 className="text-[#a9afc3] text-[22px] mb-4">Price</h1>
          <div className="range-slider">
            <Range
              values={values}
              step={STEP}
              min={MIN}
              max={MAX}
              onChange={handleChange}
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
              renderThumb={({ index, props, isDragged }) => (
                <div {...props} className="thumps">
                  <div className="labeles">{values[index]}</div>
                </div>
              )}
            />
             <div className="flex justify-between items-center mt-3 w-full ">
                  <h6 className="text-sm text-[#e0e0e0]">
                From {values[0]} $ to {values[1]} $
                  </h6>
                  <span className="filter-btn">Filter</span>
                </div>
          </div>
        </div>
        <div className="p-4 bg-[#161819] rounded-[10px]">
          <h1 className="text-[#a9afc3] text-[22px] mb-4">Colors</h1>
          <form className="flex items-center justify-start  flex-wrap">
            {colorOptions.map((item) => (
              <div key={item.id} className={""}>
                <div className={` oneRow`}>
                  <div className="w-100 d-flex align-items-center">
                    <input
                      id={`radio2-${item.id}`}
                      className={` radioCustom`}
                      name="radio-group2"
                      type="radio"
                    />
                    <label
                      htmlFor={`radio2-${item.id}`}
                      className={`radioCustomLabel`}
                    >
                      <span
                        style={{ backgroundColor: item.name_en }}
                        className={`circle`}
                      ></span>
                    </label>
                  </div>
                </div>
              </div>
            ))}
          </form>
        </div>

        
      </div>
    </div>
  );
};

export default Filter;
