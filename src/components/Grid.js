import React from "react";

import Row from "./Row";

const Grid = (props) => {
  const getRows = () => {
    const rows = [];

    for (let i = 0; i < props.gridWithBombs.length; i++) {
      rows.push(<Row key={i} gridRow={props.gridWithBombs[i]} />);
    }

    return rows;
  };

  return <div className="rootDiv">{getRows()}</div>;
};

export default Grid;
