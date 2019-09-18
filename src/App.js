import React, { useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import { malls } from "./dummyData";

const App = () => {
  const [commodities, setCommodities] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    setCommodities(Object.keys(Object.values(malls)[0].commodities));
    setCategories(Object.keys(Object.values(malls)[0].categories));
    setBrands(Object.keys(Object.values(malls)[0].brands));
  }, []);

  const renderColumnTitles = () => {
    return Object.values(malls).map(mall => {
      return <th colSpan="2">{mall.name}</th>;
    });
  };

  const renderSubHeaders = () => {
    return Object.values(malls).map(() => {
      return (
        <>
          <th>Omsättning</th>
          <th>Utveckling</th>
        </>
      );
    });
  };
  const renderMallData = () => {
    return Object.values(malls).map(mall => {
      return (
        <>
          <td>{mall.revenue}</td>
          <td>{mall.change}%</td>
        </>
      );
    });
  };

  const renderCommodityData = () => {
    return commodities.map(commodity => {
      return (
        <tr>
          <td>{commodity}</td>
          {commodityData(commodity)}
        </tr>
      );
    });
  };

  const commodityData = commodity => {
    return Object.values(malls).map(mall => {
      return (
        <>
          <td>{mall.commodities[commodity].revenue}</td>
          <td>{mall.commodities[commodity].change}%</td>
        </>
      );
    });
  };

  const renderMallsInColumn = () => {
    return (
      <div className="ui container" style={{ marginTop: 100 }}>
        <table className="ui celled definition table">
          <thead>
            <tr>
              <th></th>
              {renderColumnTitles()}
            </tr>

            <tr>
              <th></th>
              {renderSubHeaders()}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Totalt</td>
              {renderMallData()}
            </tr>
            {renderCommodityData()}
          </tbody>
        </table>
      </div>
    );
  };

  return renderMallsInColumn();
};

export default App;
