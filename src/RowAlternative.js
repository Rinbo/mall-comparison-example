import React from "react";
import { randomRevenue, randomPercentage } from "./dummyData";

const RowAlternative = ({ malls, commodities, categories, brands }) => {
  const renderDataPerMall = () => {
    return malls.map(mall => {
      return (
        <tr>
          <td>{mall}</td>
          <td>{randomRevenue(1000)}</td>
          <td>{randomPercentage()}%</td>
        </tr>
      );
    });
  };

  const renderChoosenBrands = () => {
    return brands.map(brand => {
      return (
        <table className="ui celled definition table">
          <thead style={{ marginTop: 20 }}>
            <tr>
              <th style={{ width: 200 }}>{brand}</th>
              <th>Omsättning</th>
              <th>Utveckling</th>
            </tr>
          </thead>
          <tbody>{renderDataPerMall()}</tbody>
        </table>
      );
    });
  };

  const renderChoosenCommodities = () => {
    return commodities.map(brand => {
      return (
        <table className="ui celled definition table">
          <thead style={{ marginTop: 20 }}>
            <tr>
              <th style={{ width: 200 }}>{brand}</th>
              <th>Omsättning</th>
              <th>Utveckling</th>
            </tr>
          </thead>
          <tbody>{renderDataPerMall()}</tbody>
        </table>
      );
    });
  };

  const renderChoosenCategories = () => {
    return categories.map(brand => {
      return (
        <table className="ui celled definition table">
          <thead style={{ marginTop: 20 }}>
            <tr>
              <th style={{ width: 200 }}>{brand}</th>
              <th>Omsättning</th>
              <th>Utveckling</th>
            </tr>
          </thead>
          <tbody>{renderDataPerMall()}</tbody>
        </table>
      );
    });
  };

  const renderTable = () => {
    return (
      <div style={{ marginTop: 30 }}>
        {renderChoosenBrands()}
        {renderChoosenCategories()}
        {renderChoosenCommodities()}
      </div>
    );
  };

  return renderTable();
};

export default RowAlternative;
