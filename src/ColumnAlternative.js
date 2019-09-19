import React from "react";
import { randomRevenue, randomPercentage } from "./dummyData";

const ColumnAlternative = ({ malls, commodities, categories, brands }) => {
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
  const renderData = factor => {
    return malls.map(() => {
      return (
        <>
          <td>{randomRevenue(factor)}</td>
          <td>{randomPercentage()}%</td>
        </>
      );
    });
  };

  const renderCommodityData = () => {
    return commodities.map(commodity => {
      return (
        <tr>
          <td>{commodity}</td>
          {renderData(10000)}
        </tr>
      );
    });
  };

  const renderCategoryData = () => {
    return categories.map(category => {
      return (
        <tr>
          <td>{category}</td>
          {renderData(1000)}
        </tr>
      );
    });
  };

  const renderBrandData = () => {
    return brands.map(brand => {
      return (
        <tr>
          <td>{brand}</td>
          {renderData(100)}
        </tr>
      );
    });
  };
  
  const renderMallInColumn = () => {
    if (!malls) return "Loading";
    return (
      <div style={{ marginTop: 30 }}>
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
              {renderData(100000)}
            </tr>
            {renderCommodityData()}
            {renderCategoryData()}
            {renderBrandData()}
          </tbody>
        </table>
      </div>
    );
  };

  return renderMallInColumn();
};

export default ColumnAlternative;
