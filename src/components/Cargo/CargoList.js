import React from "react";
import { Link } from "react-router-dom";

import "./CargoList.css";

const CargoList = props => {
  const renderCargoList = () => {
    const { searchTerm } = props;
    const trimmedTerm = searchTerm
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();
    const data = props.data.filter(item => {
      return item.name.toLowerCase().match(trimmedTerm);
    });

    if (data.length !== 0) {
      return data.map(item => {
        return (
          <li key={item.id}>
            <Link to={`/${item.id}`}>{item.name}</Link>
          </li>
        );
      });
    } else {
      return <h1>No Results!</h1>;
    }
  };

  return (
    <div className="spacex__CargoList">
      <ul>{renderCargoList()}</ul>
    </div>
  );
};

export default CargoList;
