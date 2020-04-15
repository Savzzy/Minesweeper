import React from "react";
import Grid from "./Grid";

import "./app.scss";

const gridSize = 8;

class App extends React.Component {
  createEmptyGrid = (gridSize) => {
    var arr = new Array(gridSize);
    var grid = arr.fill().map(() => {
      return new Array(gridSize);
      
    });

    grid.forEach((element, index) => {
      grid[index].fill(0, 0, grid[index].length);
    });

    return grid;
  };

  randomMineDistributor = () => {
    var mineLocations = [];
    let j = 0;
    while (j < 8) {
      var a = Math.floor(Math.random() * 63) + 1;
      if (!mineLocations.includes(a)) {
        mineLocations.push(a);
        j++;
      }
    }
    console.log(mineLocations);
    return mineLocations;
  };

  findBombCoordinates = (mineLocations, gridSize) => {
    let bombCoordinates = new Array();
    for (let i = 0; i < mineLocations.length; i++) {
      let rowCount = Math.floor(mineLocations[i] / gridSize);
      let columnCount = Math.abs((mineLocations[i] % gridSize) - 1);
      bombCoordinates.push([rowCount, columnCount]);
    }
    console.log("bombCoordinates", bombCoordinates);
    return bombCoordinates;
  };

  fillWithBombs = (bombCoordinates, emptyGrid) => {
    // for (let i = 0; i < mineLocations.length; i++) {
    //   let rowCount = Math.floor(mineLocations[i] / gridSize);
    //   let columnCount = Math.abs((mineLocations[i] % gridSize) - 1);
    //   emptyGrid[rowCount][columnCount] = "B";
    //   console.log("grid", emptyGrid);
    // }
    for (let i = 0; i < bombCoordinates.length; i++) {
      let row = bombCoordinates[i][0];
      let column = bombCoordinates[i][1];

      emptyGrid[row][column] = "B";
    }
    console.log("emptygrid", emptyGrid);
    return emptyGrid;
  };

  fillNumbersToGrid = (bombCoordinates, grid) => {
    for (let i = 0; i < bombCoordinates.length; i++) {
      let [r, c] = bombCoordinates[i];
      console.log("displaying row and column", r, c);
      if (r !== 0 && c !== 0 && grid[r - 1][c - 1] !== "B") {
        grid[r - 1][c - 1]++;
      }
      if (r !== 0 && grid[r - 1][c] !== "B") {
        grid[r - 1][c]++;
      }
      if (r !== 0 && c !== 7 && grid[r - 1][c + 1] !== "B") {
        grid[r - 1][c + 1]++;
      }
      if (c !== 0 && grid[r][c - 1] !== "B") {
        grid[r][c - 1]++;
      }
      if (c !== 7 && grid[r][c + 1] !== "B") {
        grid[r][c + 1]++;
      }

      if (c !== 0 && r !== 7 && grid[r + 1][c - 1] !== "B") {
        grid[r + 1][c - 1]++;
      }
      if (r !== 7 && grid[r + 1][c] !== "B") {
        grid[r + 1][c]++;
      }
      if (r !== 7 && c !== 7 && grid[r + 1][c + 1] !== "B") {
        grid[r + 1][c + 1]++;
      }
    }
    // bombCount
  };

  render() {
    const randomMineLocations = this.randomMineDistributor();
    const emptyGrid = this.createEmptyGrid(gridSize);
    const bombCoordinates = this.findBombCoordinates(
      randomMineLocations,
      gridSize
    );
    const gridWithBombs = this.fillWithBombs(bombCoordinates, emptyGrid);

    this.fillNumbersToGrid(bombCoordinates, gridWithBombs);
    return <Grid gridWithBombs={gridWithBombs} />;
  }
}

export default App;
