import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import "./app.css";
import { Dropdown } from "semantic-ui-react";
import ColumnAlternative from "./ColumnAlternative";
import RowAlternative from "./RowAlternative";
import Selectors from "./Selectors";
import { alternatives } from "./dummyData";

const App = () => {
  const [malls, setMalls] = useState([]);
  const [commodities, setCommodities] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [choosenAlt, setChoosenAlt] = useState([]);

  const selectAlternative = (e, data) => {
    e.preventDefault();
    setChoosenAlt(data.value);
  };

  const renderAlternative = () => {
    if (choosenAlt === "Radsegment") {
      return (
        <RowAlternative
          malls={malls}
          commodities={commodities}
          categories={categories}
          brands={brands}
        />
      );
    }
    if (choosenAlt === "Kolumnsegment") {
      return (
        <ColumnAlternative
          malls={malls}
          commodities={commodities}
          categories={categories}
          brands={brands}
        />
      );
    }
    return <h5>Välj ett alternativ</h5>;
  };

  const renderSelector = () => {
    if (choosenAlt.length > 0)
      return (
        <div className="ui segment">
          <Selectors
            setMalls={setMalls}
            setCommodities={setCommodities}
            setCategories={setCategories}
            setBrands={setBrands}
          />
        </div>
      );
    return null;
  };

  return (
    <div className="ui container" style={{ marginTop: 50 }}>
      <div className="ui segment">
        <div className="ui subheader">Tabellalternativ</div>
        <Dropdown
          placeholder="Alternativ"
          search
          selection
          options={alternatives}
          onChange={selectAlternative}
        />
        {renderSelector()}
      </div>
      {renderAlternative()}
    </div>
  );
};

export default App;
