import React from "react";

import Item from "./item";

const Sales = () => (
  <div className="text-center bg-slate-100 p-4">
    <p className="md:text-3xl text-2xl font-medium ">Ưu đãi</p>
    <div
      style={{
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
  </div>
);

export default Sales;
