import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import "./app.css";
import ColumnAlternative from "./ColumnAlternative";
import Selectors from "./Selectors";
import {
  INITIAL_MALLS,
  INITIAL_COMMODITIES,
  INITIAL_CATEGORIES,
  INITIAL_BRANDS
} from "./dummyData";

const App = () => {
  const [malls, setMalls] = useState([]);
  const [commodities, setCommodities] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  return (
    <div className="ui container" style={{ marginTop: 50 }}>
      <Selectors
        setMalls={setMalls}
        setCommodities={setCommodities}
        setCategories={setCategories}
        setBrands={setBrands}
      />
      <ColumnAlternative
        malls={malls}
        commodities={commodities}
        categories={categories}
        brands={brands}
      />
    </div>
  );
};

export default App;
