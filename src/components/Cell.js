import React from "react";
import Mine from "./Mines";
class Cell extends React.Component {
  render() {
  return <div className="cells">{this.props.gridCell === 'B' ? <Mine/> : this.props.gridCell}</div>;
  }
}

export default Cell;
