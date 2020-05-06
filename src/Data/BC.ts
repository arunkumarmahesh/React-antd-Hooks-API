import React from "react";

import { Chart } from "@antv/g2";

function App() {
  const data = [
    { genre: "Sports", sold: 275 },
    { genre: "Strategy", sold: 115 },
    { genre: "Action", sold: 120 },
    { genre: "Shooter", sold: 350 },
    { genre: "Other", sold: 150 },
  ];

  const chart = new Chart({
    container: "root",
    width: 1000,
    height: 300,
  });

  chart.data(data);

  chart.interval().position("genre*sold");
  chart.render();
}

export default App;
