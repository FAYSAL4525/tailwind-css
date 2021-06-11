import React from "react";
import ImageOne from "../images/food-pic-1.jpg";
import ImageTwo from "../images/food-pic-2.jpg";
import ImageThree from "../images/food-pic-3.jpg";

const Content = () => {
  return (
    <div className="grid grid-flow-col grid-cols-3 gap-4">
      <div className="menu-card ">
        <img src={ImageOne} alt="egg" className="h-full rounded mb-20 shadow" />
        <div className="content-center">
          <h2 className="text-2xl mb-2">Egg Muffins</h2>
          <p className="mb-2">Cripsy,delicious,and mutritious</p>
          <span>$16</span>
        </div>
      </div>
      <div className="menu-card ">
        <img src={ImageTwo} alt="egg" className="h-full rounded mb-20 shadow" />
        <div className="content-center">
          <h2 className="text-2xl mb-2">Egg Muffins</h2>
          <p className="mb-2">Cripsy,delicious,and mutritious</p>
          <span>$16</span>
        </div>
      </div>
      <div className="menu-card ">
        <img
          src={ImageThree}
          alt="egg"
          className="h-full rounded mb-20 shadow"
        />
        <div className="content-center">
          <h2 className="text-2xl mb-2">Egg Muffins</h2>
          <p className="mb-2">Cripsy,delicious,and mutritious</p>
          <span>$16</span>
        </div>
      </div>
    </div>
  );
};

export default Content;
