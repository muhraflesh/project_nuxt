<template>
	<div id="app">
		<canvas id="planet-chart"></canvas>
	</div>
</template>

<script>
  import Chart from '../node_modules/chart.js/dist/Chart.min.js'
  import planetChartData from '../assets/js/chart-data.js';

  export default {
    components: {
      Chart,
      planetChartData
    },
    data() {
  return {
    planetChartData,
  }
},
    methods: {
      createChart(chartId, chartData) {
        const ctx = document.getElementById(chartId);
        const myChart = new Chart(ctx, {
          type: chartData.type,
      data: chartData.data,
      options: chartData.options,
      });
      }
    },
    mounted() {
  this.createChart('planet-chart', this.planetChartData);
}
  }
</script>

<style>
  .small {
    max-width: 600px;
    margin:  150px auto;
  }
</style>