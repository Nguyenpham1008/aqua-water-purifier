import React from "react";

import Avatar from "@mui/material/Avatar";

import priceImg from "../../assests/best_price.jpg";
import gopLaiSuatImg from "../../assests/buyer.jpg";
import warrantyImg from "../../assests/warranty.png";
import maintainanceImg from "../../assests/maintannance.png";

const getImage = (type) => {
  switch (type) {
    case "price":
      return priceImg;
      break;
    case "buyer":
      return gopLaiSuatImg;
      break;
    case "warranty":
      return warrantyImg;
      break;
    case "maintannance":
      return maintainanceImg;
    default:
    // code block
  }
};
const Item = ({ message, type }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "center",
    }}
  >
    <Avatar
      alt="Remy Sharp"
      src={getImage(type)}
      sx={{ width: 150, height: 150 }}
    />
    {message}
  </div>
);

export default Item;
