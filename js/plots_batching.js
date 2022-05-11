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
        var trace = [
        {
            type: 'indicator',
            //mode: 'number+delta',
            mode: 'number',
            value: 300,
            // number: {
            //   font: {
            //     color: 'gray',
            //     size: 40
            //   }
            // },
            delta: {
                reference: 299
            },
            title:{
                //text: "<span style='font-size: 1.5em'>Orders Batched</span>"
                text: "Orders Batched"
            }
        },
        
        {
          type: 'bar',
          x: labels,
          y: picks,
          name: hours[i],
          marker: {
            color: colors_batching[i]
          }
        }]
        chunks.push(trace[0])
        chunks.push(trace[1])
      }
      var layout = {
        barmode: 'stack',
        title: {
          //text: 'WAREHOUSE ' + warehouse.substr(14,2) + ' - Picking by Employee'
          text: 'Batch Lines "Moved" <br>by Employee',
          font: {
            size: 20
          }
        },
        margin: {
          l: 30,
          r: 30
        },
        showlegend: false,
        // legend: {
        //   title: {
        //     text: 'Hour of the Day'
        //   }
        // },
        // yaxis: {
        //   title: {
        //     text: 'Total Lines Moved (Batch)'
        //   }
        // },
        xaxis: {
          autotick: false,
          tickfont: {
            size: 14
          }
        }
      }
      Plotly.newPlot(place, chunks, layout)
    }
  })
}
batchers_w('data/W10_Batch Move.json', 'plot_p_1_3')
