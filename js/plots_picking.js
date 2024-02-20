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
        var trace = {
          type: 'bar',
          x: labels,
          y: picks,
          name: hours[i],
          marker: {
            color: colors_picking[i]
          }
        }
        chunks.push(trace)        
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
      Plotly.newPlot(place, chunks, layout, {displayModeBar: false})
    }
  })
}




function orders(data_source) {
  d3.json(data_source).then((data) => {
    // console.log(data)
    // console.log(data['10'])
    // console.log(data['10']["('Today', 'Picking')"])


    // var picked_orders = parseInt(d['10']['Picking'])
    // var packed_orders = parseInt(d['10']['Rate And Ship'])
    // var batched_orders = parseInt(d['10']['Batch Move'])

    var today_picked_orders = parseInt(data['10']["('Today', 'Picking')"])
    var today_packed_orders = parseInt(data['10']["('Today', 'Rate And Ship')"])
    var today_batched_orders = parseInt(data['10']["('Today', 'Batch Move')"])

    var yesterday_picked_orders = parseInt(data['10']["('Yesterday', 'Picking')"])
    var yesterday_packed_orders = parseInt(data['10']["('Yesterday', 'Rate And Ship')"])
    var yesterday_batched_orders = parseInt(data['10']["('Yesterday', 'Batch Move')"])

    var data1 = [{
      type: "indicator",
      mode: "number+delta",
      //mode: 'number',
      value: today_picked_orders,
      // number: {
      //   font: {
      //     color: 'gray',
      //     size: 40
      //   }
      // },
      delta: {
        reference: yesterday_picked_orders,
        position: 'right'
      },
      title: {
        //text: "<span style='font-size: 1.5em'>Orders Picked</span>"
        text: "Orders Picked"
      }
    }]

    var data2 = [{
      type: "indicator",
      mode: "number+delta",
      //mode: 'number',
      value: today_packed_orders,
      // number: {
      //   font: {
      //     color: 'gray',
      //     size: 40
      //   }
      // },
      delta: {
        reference: yesterday_packed_orders,
        position: 'right'
      },
      title: {
        //text: "<span style='font-size: 1.5em'>Orders Picked</span>"
        text: "Orders Packed"
      }
    }]

    var data3 = [{
      type: "indicator",
      mode: "number+delta",
      //mode: 'number',
      value: today_batched_orders,
      // number: {
      //   font: {
      //     color: 'gray',
      //     size: 40
      //   }
      // },
      delta: {
        reference: yesterday_batched_orders,
        position: 'right'
      },
      title: {
        //text: "<span style='font-size: 1.5em'>Orders Picked</span>"
        text: "Orders Batched",
        align: 'bottom'
      }
    }]

    var layout = {
      //paper_bgcolor: "lightgray",
      //width: 600,
      height: 200,
      margin: { t: 0, b: 0, l: 0, r: 0 }
    }

    Plotly.newPlot('plot_p_2_1', data1, layout, {displayModeBar: false})
    Plotly.newPlot('plot_p_2_2', data2, layout, {displayModeBar: false})
    Plotly.newPlot('plot_p_2_3', data3, layout, {displayModeBar: false})

    //console.log(picked_orders)
    //return picked_orders
  });
}









function open_orders(data_source, warehouse) {
  d3.json(data_source).then((data) => {
    console.log(data)
    console.log(data[warehouse])
    console.log(data[warehouse]["Shipments"])

    var open = data[warehouse]["Shipments"]


    
    var data1 = [{
      type: "indicator",
      mode: "number",
      //mode: 'number',
      value: open,
      number: {
        font: {
          //color: 'gray',
          size: 60
        }
      },
      title: {
        text: "<span style='font-size: 4em'>Released Open Orders</span>"
        //text: "Open Orders"
      }
    }]

    

    var layout = {
      paper_bgcolor: "#F0F0F0",
      //width: 600,
      height: 180,
      margin: { t: 80, b: 0, l: 0, r: 0 }
    }

    Plotly.newPlot('plot_p_1', data1, layout, {displayModeBar: false})



  });
}










orders('data/W10_Orders.json')
open_orders('data/Open_Orders.json', '10')
pickers_w('data/W10_Picking.json', 'plot_p_1_1')

