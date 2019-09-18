import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { malls } from "./dummyData";

const App = () => {
  const [commodities, setCommodities] = useState(false);
  const [categories, setCategories] = useState(false);
  const [kedjor, setKedjor] = useState(false);

  const renderColumnTitles = () => {
    return Object.values(malls).map(mall => {
      return <th colSpan="2">{mall.name}</th>;
    });
  };

  const renderMetaData = () => {
    return Object.values(malls).map(mall => {
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

  const renderCommodityData = () => {};

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
              {renderMetaData()}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Totalt</td>
              {renderMallData()}
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  return renderMallsInColumn();
};

export default App;
