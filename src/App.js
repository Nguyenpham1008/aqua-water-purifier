import logo from "./logo.svg";
import "./App.css";

import Header from "./components/header/index.js";
import Banner from "./components/banner/index.js";
import Sales from "./components/sale/index.js";
import Feedbacks from "./components/feedback/index.js";

const App = () => (
  <div>
    <div className="App" style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <Banner />
    </div>
    <Sales />
    <Feedbacks />
  </div>
);

export default App;
