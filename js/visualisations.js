/*
=================================================
WHERE AUSTRALIA IS GROWING
visualisations.js
FIT2179 Data Visualisation
=================================================
*/

const charts = [
  ["chart_01", "visualisations/01_choropleth.json"],
  ["chart_02", "visualisations/02_bubble_map.json"],
  ["chart_03", "visualisations/03_population_pyramid.json"],
  ["chart_04", "visualisations/04_heatmap.json"],
  ["chart_05", "visualisations/05_small_multiples_line.json"],
  ["chart_06", "visualisations/06_streamgraph.json"],
  ["chart_07", "visualisations/07_connected_scatterplot.json"],
  ["chart_08", "visualisations/08_slope_chart.json"],
  ["chart_09", "visualisations/09_bump_chart.json"],
  ["chart_10", "visualisations/10_lollipop.json"],
  ["chart_11", "visualisations/11_stacked_normalised_bar.json"],
  ["chart_12", "visualisations/12_diverging_bar.json"]
];

charts.forEach(([id, file]) => {
  const container = document.getElementById(id);

  if (!container) {
    console.warn(`Missing container: #${id}`);
    return;
  }

  vegaEmbed(container, file, {
    actions: false
  })
    .then(() => {
      console.log(`Loaded: ${file}`);
    })
    .catch(error => {
      console.error(`Error loading ${file}:`, error);

      container.innerHTML = `
        <p style="
          color: red;
          font-family: Arial, sans-serif;
          font-size: 14px;
          padding: 10px;
        ">
          Could not load ${file}
        </p>
      `;
    });
});