const example = [5, 8, 2, 1, 15, 2, 3, 5, 9, 11, 10, 4, 3, 14, 1, 7, 10, 3, 2, 13];

function mountApp() {
  const body = document.body;
  document.body.innerHTML = `
    <div id="app">
      <span id="max-label">
      </span>
      <span id="zero-label">
        0
      </span>
      <span id="points-label">
      </span>
    </div> 
  `
}

function barChart(data = example) {
  mountApp();

  const root = document.getElementById("app");
  const chartW = +getComputedStyle(root).width.split("px")[0];
  const chartH = +getComputedStyle(root).height.split("px")[0];
  const barW = chartW / data.length;
  const maxDataValue = Math.max(...data);

  document.getElementById("max-label").innerText = maxDataValue;
  document.getElementById("points-label").innerText = data.length;

  const fragment = document.createDocumentFragment();

  data.forEach((value) => {
    const bar = document.createElement("div");
    bar.style.width = `${barW}px`;
    bar.style.height = `${(chartH / maxDataValue) * value}px`;

    if (value < 6) {
      bar.classList.add("green");
    } else if (value > 5 && value < 11) {
      bar.classList.add("yellow");
    } else {
      bar.classList.add("red");
    }

    fragment.appendChild(bar);
  });

  root.appendChild(fragment);
}

window.barChart = barChart;
