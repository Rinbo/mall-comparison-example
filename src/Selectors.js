import React from "react";
import { Dropdown } from "semantic-ui-react";
import { malls, commodities, categories, brands } from "./dummyData";
import ArrowComponent from "./ArrowComponent";

const Selectors = ({ setMalls, setCommodities, setCategories, setBrands }) => {
  const selectMalls = (e, data) => {
    e.preventDefault();
    setMalls(data.value);
  };

  const selectCommodities = (e, data) => {
    e.preventDefault();
    setCommodities(data.value);
  };

  const selectCategories = (e, data) => {
    e.preventDefault();
    setCategories(data.value);
  };

  const selectBrands = (e, data) => {
    e.preventDefault();
    setBrands(data.value);
  };

  return (
    <div className="selector-flex">
      <div>
        <div className="ui subheader">Köpcentrum</div>
        <Dropdown
          placeholder="Köpcentrum"
          onChange={selectMalls}
          fluid
          multiple
          selection
          options={malls}
        />
      </div>
      <ArrowComponent showArrow={true} />
      <div>
        <div className="ui subheader">Varugrupper</div>
        <Dropdown
          placeholder="Varugrupper"
          onChange={selectCommodities}
          fluid
          multiple
          selection
          options={commodities}
        />
      </div>
      <ArrowComponent showArrow={false} />
      <div>
        <div className="ui subheader">Kategorier</div>
        <Dropdown
          placeholder="Kategorier"
          onChange={selectCategories}
          fluid
          multiple
          selection
          options={categories}
        />
      </div>
      <ArrowComponent showArrow={false} />
      <div>
        <div className="ui subheader">Kedjor</div>
        <Dropdown
          placeholder="Kedjor"
          onChange={selectBrands}
          fluid
          multiple
          selection
          options={brands}
        />
      </div>
    </div>
  );
};

export default Selectors;
