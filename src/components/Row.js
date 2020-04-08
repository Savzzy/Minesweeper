import React from "react";
import Cell from "./Cell";

class Row extends React.Component {

  renderCells = (gridRow) => {
    let cells = [];
    let i = 0;

    while (i < gridRow.length) {
      cells.push(<Cell key={i} gridCell={gridRow[i]} />);
      i++;
    }

    return cells;
  };

  render() {
    return(
        <div className="container">{this.renderCells(this.props.gridRow)}</div>
    );
  }
}

export default Row;
