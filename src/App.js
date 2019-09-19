import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { randomRevenue, randomPercentage } from "./dummyData";

const App = () => {
  const INITIAL_MALLS = [
    "Mobilia",
    "Sickla",
    "Farsta Centrum",
    "Forum Gallerian"
  ];
  const INITIAL_COMMODITIES = ["Beklädnad", "Dagligvaror"];
  const INITIAL_CATEGORIES = ["Kläder", "Livsmedel"];
  const INITIAL_BRANDS = ["HM", "ICA Kvantum"];

  const [malls, setMalls] = useState(INITIAL_MALLS);
  const [commodities, setCommodities] = useState(INITIAL_COMMODITIES);
  const [categories, setCategories] = useState(INITIAL_CATEGORIES);
  const [brands, setBrands] = useState(INITIAL_BRANDS);

  // useEffect(() => {
  //   setCommodities(Object.keys(Object.values(dummyData)[0].commodities));
  //   setCategories(Object.keys(Object.values(dummyData)[0].categories));
  //   setBrands(Object.keys(Object.values(dummyData)[0].brands));
  // }, []);

  const renderColumnTitles = () => {
    return malls.map(mall => {
      return <th colSpan="2">{mall}</th>;
    });
  };

  const renderSubHeaders = () => {
    return malls.map(() => {
      return (
        <>
          <th>Omsättning</th>
          <th>Utveckling</th>
        </>
      );
    });
  };
  const renderMallData = () => {
    return malls.map(mall => {
      return (
        <>
          <td>{randomRevenue(100000)}</td>
          <td>{randomPercentage(100000)}%</td>
        </>
      );
    });
  };

  const renderCommodityData = () => {
    return commodities.map(commodity => {
      return (
        <tr>
          <td>{commodity}</td>
          {commodityData()}
        </tr>
      );
    });
  };

  const commodityData = () => {
    return malls.map(() => {
      return (
        <>
          <td>{randomRevenue(10000)}</td>
          <td>{randomPercentage(10000)}%</td>
        </>
      );
    });
  };

  const renderMallInColumn = () => {
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

  return renderMallInColumn();
};

export default App;
