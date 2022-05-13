var colors_packing = ['#FF930F', '#FF9C16', '#FFA61D', '#FFAF24', '#FFB82B', '#FFC132', '#FFCB38', '#FFD43F', '#FFDD46', '#FFE64D', '#FFF054', '#FFF95B']


function packers_w(warehouse, place) {
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
          type: 'bar',
          x: labels,
          y: picks,
          name: hours[i],
          marker: {
            color: colors_packing[i]
          }
        }
        chunks.push(trace)
      }
      var layout = {
        barmode: 'stack',
        title: {
          //text: 'WAREHOUSE ' + warehouse.substr(14,2) + ' - Picking by Employee'
          text: 'Boxes "Packed" by Employee',
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
        //     text: 'Total Boxes Packed'
        //   }
        // },
        xaxis: {
          autotick: false,
          tickfont: {
            size: 14
          }
        }
      }
      Plotly.newPlot(place, chunks, layout, {displayModeBar: false})
    }
  })
}
packers_w('data/W10_Rate And Ship.json', 'plot_p_1_2')
