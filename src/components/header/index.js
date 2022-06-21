import React from "react";
import logoImg from "../../assests/logo.jpg";

const Header = () => (
  <div style={{ padding: 10, display: "flex", gap: 15, alignItems: "center" }}>
    <img src={logoImg} style={{ width: "20%", height: "auto" }} />
    <a>Home</a>
    <a>Giới thiệu</a>
    <a>Sản phẩm</a>
    <a>Cảm nhận</a>
    <a>Đặt mua</a>
  </div>
);

export default Header;
