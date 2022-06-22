import React from "react";

import bannerImg from "../../assests/banner.jpeg";

const Banner = () => (
  <div>
    <img
      style={{
        width: "100%",
        height: "auto",
        position: "absolute",
        maxHeight: 500,
      }}
      src={bannerImg}
    />

    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        zIndex: 100,
        position: "absolute",
        left: 0,
        right: 0,
      }}
    >
      <p>Đại lý chuyên phân phối các dòngg máy lọc nước AQUA</p>
      <p style={{ fontSize: 20, fontWeight: "bold" }}>
        TP.HCM, ĐỒNG NAI, BÌNH DƯƠNG
      </p>
      <div className="font-bold">hello</div>
    </div>
  </div>
);

export default Banner;
