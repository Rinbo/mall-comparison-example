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

  const renderTableBody = () => {
    return Object.values(malls).map(mall => {
      return (
        <tr>
          <td>{mall.varugrupper["Beklädnad"].name}</td>
          <td>{mall.kategorier["Kläder"].revenue}</td>
          <td>{mall.kedjor["HM"].utveckling}</td>
        </tr>
      );
    });
  };

  const renderColumnLeftMargin = () => {
    return (
      <tr>
        <td>{commodities ? malls.mobilia.commodname : null}</td>
        <td>{categories ? malls.mobilia.name : null}</td>
        <td>{commodities ? malls.mobilia.name : null}</td>
        <td>None</td>
        <td>Resets rating to default value</td>
      </tr>
    );
  };

  const renderMallsInColumn = () => {
    return (
      <div className="ui container" style={{ marginTop: 100 }}>
        <table className="ui definition table">
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
          <tbody>{renderTableBody()}</tbody>
        </table>
      </div>
    );
  };

  return renderMallsInColumn();
};

export default App;
