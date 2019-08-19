export const planetChartData = {
    type: 'bar',
    data: {
      labels: ['Laptop', 'Mouse', 'Keyboard', 'Proyektor'],
      datasets: [
        { // one line graph
          label: 'Jumlah Barang',
          data: [139.8, 49.2, 116.4, 50.7],
          backgroundColor: [
            'rgba(54,73,93,.5)', // Blue
            'rgba(71, 183,132,.5)', // Green
            'rgba(54,73,93,.5)',
            'rgba(54,73,93,.5)',
          ],
          borderColor: [
            '#36495d',
            '#36495d',
            '#36495d',
            '#36495d',
          ],
          borderWidth: 3
        }
      ]
    },
    options: {
      responsive: true,
      lineTension: 1,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            padding: 25,
          }
        }]
      }
    }
  }
  
  export default planetChartData;