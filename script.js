const grid = document.getElementById("grid");

function makeRows(rows, cols) {
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
  };
};

makeRows(16, 16);