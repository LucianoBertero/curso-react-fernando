import React from "react";
import { getGifts } from "../helpers/getGift";
export const GifGrid = ({ category }) => {
  const resp = getGifts(category);
  console.log(resp);
  return (
    <div>
      <h3>{category}</h3>
    </div>
  );
};
