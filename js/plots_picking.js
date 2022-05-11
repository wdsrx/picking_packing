var colors_picking = ['#456FE8', '#4175E8', '#3D7BE9', '#3981E9', '#3587E9', '#318DEA', '#2D92EA', '#2998EB', '#259EEB', '#21A4EB', '#1DAAEC', '#19B0EC']

function pickers_w(warehouse, place) {
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
          type: "indicator",
          mode: "number+delta",
          value: 480,
          number: {
            font: {
              color: 'gray',
              size: 40
            }
          },
          delta: {
            reference: 400
          },
          title: {
            text: "<span style='font-size: 1.5em'>Orders Picked</span>"
            //text: "Orders Picked"
          }
        },
        
        {
          type: 'bar',
          x: labels,
          y: picks,
          name: hours[i],
          marker: {
            color: colors_picking[i]
          }
        }]
        chunks.push(trace[0])
        chunks.push(trace[1])
      }
      var layout = {
        barmode: 'stack',
        title: {
          //text: 'WAREHOUSE ' + warehouse.substr(14,2) + ' - Picking by Employee'
          text: 'Lines "Picked" by Employee',
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
        //     text: 'Total Lines Picked'
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
pickers_w('data/W10_Picking.json', 'plot_p_1_1')
