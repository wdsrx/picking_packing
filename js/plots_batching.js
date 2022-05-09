var colors_batching = ['#51C26F', '#60C665', '#6EC95B', '#7DCD51', '#8CD047', '#9AD43D', '#A9D733', '#B7DB29', '#C6DE1F', '#D5E215', '#E3E50B', '#F2E901']

function batchers_w(warehouse, place) {
  d3.json(warehouse).then((data) => {
    //console.log(data);

    if (Object.keys(data).length > 0) {
      // Hours
      first = Object.values(data)[0]
      var hours = Object.keys(first)
      //console.log(hours)
      // console.log(Object.values(a))

      // Employees (x)
      var labels = Object.keys(data)
      //console.log(labels)

      var dataSize = hours.length
      var chunks = []
      
      for (var i = 0; i < dataSize; i++) {
        // Picking Activity (y)
        var picks = []
        Object.values(data).forEach((line) => {
          //console.log(Object.keys(line)[i])
          //console.log(Object.values(line)[i])
          picks.push(Object.values(line)[i])
        })
        var trace = {
          x: labels,
          y: picks,
          name: hours[i],
          type: 'bar',
          marker: {
            color: colors_batching[i]
          }
        }
        chunks.push(trace)
      }
      var layout = {
        barmode: 'stack',
        title: {
          //text: 'WAREHOUSE ' + warehouse.substr(14,2) + ' - Picking by Employee'
          text: 'Number of Lines Moved (Batch) by Employee'
        },
        legend: {
          title: {
            text: 'Hour of the Day'
          }
        },
        yaxis: {
          title: {
            text: 'Total Lines Moved (Batch)'
          }
        }
      }
      Plotly.newPlot(place, chunks, layout)
    }
  })
}
batchers_w('data/batchers_w10.json', 'plot_p_1_3')
