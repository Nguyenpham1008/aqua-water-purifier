import React from "react";

import Item from "./item";

const Sales = () => (
  <div
    style={{
      paddingTop: 520,
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap",
    }}
  >
    <Item message="Rẻ nhất thị trường" type="price" />
    <Item message="Trả góp 0% lãi suất" type="buyer" />
    <Item message="Bảo hành 2 năm" type="warranty" />
    <Item message="Miễn phí lắp đặt" type="maintannance" />
  </div>
);

export default Sales;
