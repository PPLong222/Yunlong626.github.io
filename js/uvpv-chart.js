(function () {
  let chartDom = document.getElementById("uv-pv-chart");
  let myChart_uvpv = echarts.init(chartDom);
  let option;
  $.get("https://www.pplong.top/custom_src/data/pvuv.json", function (_rawData) {
    drawChart(_rawData);
  });

  function drawChart(data) {
    option = {
      animationDuration: 5000,
      title: {
        text: "网站访问量UV PV走向",
        left: "center",
        textStyle: {
          color: "#fff",
        },
      },
      tooltip: {
        trigger: "axis",
      },
      dataset: {
        source: data,
      },
      xAxis: {
        type: "category",
        name: "日期",
      },
      yAxis: {
        type: "value",
        name: "访问量",
        splitLine: {
          show: true,
          lineStyle: {
            width: 1,
            color: "#494e59",
          },
        },
      },

      series: [
        {
          name: "UV",
          type: "line",
          smooth: true,
          encode: {
            x: 0,
            y: 1,
          },
          labelLayout: {
            moveOverlap: "shiftY",
          },
          emphasis: {
            focus: "series",
          },
          endLabel: {
            show: true,
            formatter: function (params) {
              return "UV : " + params.value[1];
            },
            color: "#c2c2c2",
          },
        },
        {
          name: "PV",
          type: "line",
          smooth: true,
          encode: {
            x: 0,
            y: 2,
          },
          labelLayout: {
            moveOverlap: "shiftY",
          },
          emphasis: {
            focus: "series",
          },
          endLabel: {
            show: true,
            formatter: function (params) {
              return "PV : " + params.value[2];
            },
            color: "#c2c2c2",
          },
        },
      ],
    };
    option && myChart_uvpv.setOption(option);
  }
})();
