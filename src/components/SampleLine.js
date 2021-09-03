class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [{
        data: series.monthDataSeries1.prices
      }],
      options: {
        chart: {
          height: 350,
          type: 'line',
          id: 'areachart-2'
        },
        annotations: {
          yaxis: [{
            y: 8200,
            borderColor: '#00E396',
            label: {
              borderColor: '#00E396',
              style: {
                color: '#fff',
                background: '#00E396',
              },
              text: 'Support',
            }
          }, {
            y: 8600,
            y2: 9000,
            borderColor: '#000',
            fillColor: '#FEB019',
            opacity: 0.2,
            label: {
              borderColor: '#333',
              style: {
                fontSize: '10px',
                color: '#333',
                background: '#FEB019',
              },
              text: 'Y-axis range',
            }
          }],
          xaxis: [{
            x: new Date('23 Nov 2017').getTime(),
            strokeDashArray: 0,
            borderColor: '#775DD0',
            label: {
              borderColor: '#775DD0',
              style: {
                color: '#fff',
                background: '#775DD0',
              },
              text: 'Anno Test',
            }
          }, {
            x: new Date('26 Nov 2017').getTime(),
            x2: new Date('28 Nov 2017').getTime(),
            fillColor: '#B3F7CA',
            opacity: 0.4,
            label: {
              borderColor: '#B3F7CA',
              style: {
                fontSize: '10px',
                color: '#fff',
                background: '#00E396',
              },
              offsetY: -10,
              text: 'X-axis range',
            }
          }],
          points: [{
            x: new Date('01 Dec 2017').getTime(),
            y: 8607.55,
            marker: {
              size: 8,
              fillColor: '#fff',
              strokeColor: 'red',
              radius: 2,
              cssClass: 'apexcharts-custom-class'
            },
            label: {
              borderColor: '#FF4560',
              offsetY: 0,
              style: {
                color: '#fff',
                background: '#FF4560',
              },

              text: 'Point Annotation',
            }
          }, {
            x: new Date('08 Dec 2017').getTime(),
            y: 9340.85,
            marker: {
              size: 0
            },
            image: {
              path: '../../assets/images/ico-instagram.png'
            }
          }]
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        grid: {
          padding: {
            right: 30,
            left: 20
          }
        },
        title: {
          text: 'Line with Annotations',
          align: 'left'
        },
        labels: series.monthDataSeries1.dates,
        xaxis: {
          type: 'datetime',
        },
      },


    };
  }



  render() {
    return (


      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
      </div>


    );
  }
}

const domContainer = document.querySelector('#app');
ReactDOM.render(React.createElement(ApexChart), domContainer);

// --

import React from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Support Tickets : Received vs Resolved",
    yaxisname: "# of Tickets",
    subcaption: "Last week",
    numdivlines: "3",
    showvalues: "0",
    legenditemfontsize: "15",
    legenditemfontbold: "1",
    plottooltext: "<b>$dataValue</b> Tickets $seriesName on $label",
    theme: "candy"
  },
  categories: [
    {
      category: [
        {
          label: "Jan 1"
        },
        {
          label: "Jan 2"
        },
        {
          label: "Jan 3"
        },
        {
          label: "Jan 4"
        },
        {
          label: "Jan 5"
        },
        {
          label: "Jan 6"
        },
        {
          label: "Jan 7"
        }
      ]
    }
  ],
  dataset: [
    {
      seriesname: "Received",
      data: [
        {
          value: "55"
        },
        {
          value: "45"
        },
        {
          value: "52"
        },
        {
          value: "29"
        },
        {
          value: "48"
        },
        {
          value: "28"
        },
        {
          value: "32"
        }
      ]
    },
    {
      seriesname: "Resolved",
      data: [
        {
          value: "50"
        },
        {
          value: "30"
        },
        {
          value: "49"
        },
        {
          value: "22"
        },
        {
          value: "43"
        },
        {
          value: "14"
        },
        {
          value: "31"
        }
      ]
    }
  ]
};

class MyComponent extends React.Component {
  render() {
    return (
      <ReactFusioncharts
        type="msspline"
        width="100%"
        height="100%"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    );
  }
}