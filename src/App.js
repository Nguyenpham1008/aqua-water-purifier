import "./styles.css";

import Header from "./components/header/index.js";
import Banner from "./components/banner/index.js";
import Sales from "./components/sale/index.js";

const App = () => (
  <div>
    <div className="App" style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <Banner />
    </div>
    <Sales />
  </div>
);

export default App;
