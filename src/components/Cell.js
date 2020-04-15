import React from "react";
import Mine from "./Mines";

class Cell extends React.Component {
  state = {
    onClicked: false,
    gridCell: this.props.gridCell,
    contextMenu: false,
  };

  handleClick = (event) => {
    if (event.nativeEvent.which === 1) this.setState({ onClicked: true });
    if (event.nativeEvent.which === 3) {
      console.log("right clicked");
      event.preventDefault();
      this.setState({ contextMenu: true });
    }
  };

  render() {
    let cellDisplay;
    if (this.state.onClicked) {
      if (this.state.gridCell === "B") {
        cellDisplay = <Mine />;
      }
      if (typeof this.state.gridCell === "number") {
        cellDisplay = <div>{this.state.gridCell}</div>;
      }
    } else if (this.state.contextMenu === true) {
      cellDisplay = <div>🚩</div>;
    }

    return (
      <div
        className="cells"
        onClick={this.handleClick}
        onContextMenu={this.handleClick}
        data-testid="cell"
      >
        {this.state.onClicked || this.state.contextMenu ? (
          cellDisplay
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}
//{this.state.gridCell === 'B' ? <Mine/> : this.props.gridCell}
export default Cell;
