// WAREHOUSES //
// ACTIVITY BY WAREHOUSE
function warehouse() {
    d3.json('data/warehouse.json').then((data) => {
      // console.log(data);
      // console.log(data.operationCode)
      // console.log(Object.values(data.operationCode))
      // console.log(Object.keys(data.operationCode))
  
      var labels = Object.keys(data.operationCode)
      var values = Object.values(data.operationCode)
  
      // Warehouse Bar Chart
      var data = [{
        x: labels,
        y: values,
        type: 'bar',
        marker: {
          color: values
        }
      }]
      var layout = {
        xaxis: {
          autotypenumbers: 'strict', 
          title: 'WAREHOUSE'
        },
        title: {
          text: "Activity by Warehouse"
        }
      }
      Plotly.newPlot("plot_w_1_1", data, layout);
    })
  }
  //warehouse()
  
  // ACTIVITY BY HOUR
  function hours() {
    d3.json('data/hours.json').then((data) => {
      //console.log(data);
  
      var labels = Object.keys(data.Operations)
      var values = Object.values(data.Operations)
  
      var data = [{
        x: labels,
        y: values,
        type: "bar",
        marker: {
          color: values
        }
      }]
      layout = {
        title: {
          text: 'Activity by Hour'
        },
        xaxis: {
          title: 'HOUR',
          autotick: false
        }
      }
      Plotly.newPlot("plot_w_1_2", data, layout);
    })
  }
  //hours()
  
  // ACTIVITY BY OPERATION TYPE
  function operations() {
    d3.json('data/operations_type.json').then((data) => {
      //console.log(data);
  
      var labels = Object.keys(data.Tasks)
      var values = Object.values(data.Tasks)
  
      var data = [{
        x: labels,
        y: values,
        type: "bar",
        marker: {
          color: values
        }
      }]
      layout = {
        title: {
          text: 'Activity by Operation Type'
        },
        xaxis: {
          tickangle : 45,
          tickfont: {
            size: 8
          }
        }
      }
      Plotly.newPlot("plot_w_2_1", data, layout);
    })
  }
  //operations()
  
  // ACTIVITY BY OPERATION TYPE EXCLUDING PICKING AND RECEIVING
  function operations_excluded() {
    d3.json('data/operations_type_excluded.json').then((data) => {
      //console.log(data);
  
      var labels = Object.keys(data.Tasks)
      var values = Object.values(data.Tasks)
  
      var data = [{
        x: labels,
        y: values,
        type: "bar",
        marker: {
          color: values
        }
      }]
      layout = {
        title: {
          text: 'Activity by Operation Type Excluding Picking and Receiving'
        },
        xaxis: {
          tickangle : 45,
          tickfont: {
            size: 8
          }
        }
      }
      Plotly.newPlot("plot_w_2_2", data, layout);
    })
  }
  //operations_excluded()
  
  // OPEN OUTBOUND ORDERS
  colors = ['#44D492', '#88F7E2', '#F5EB67', '#FFA15C', '#FA233E']
  function openOutbounds() {
    d3.json('data/open_outbounds.json').then((data) => {
      //console.log(data);
  
      var labels = Object.keys(data.orders)
      //console.log(labels)
      var values = Object.values(data.orders)
      console.log(values)
  
      var data = [{
        x: labels,
        y: values,
        type: "bar",
        marker: {
          color: colors
        }
      }]
      layout = {
        title: {
          text: 'Open Outbound Orders'
        },
        xaxis: {
          autotick: false
        }
      }
      Plotly.newPlot("plot_p_1_2", data, layout);
    })
  }
  // openOutbounds()