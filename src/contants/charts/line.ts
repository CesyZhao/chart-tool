enum LineChart {
  Basic = 'Basic',
  Smoothed = 'Smoothed',
  Area = 'Area',
  Stocked = 'Srocked',
}

const basicOption = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
};

const smoothedOption = Object.assign({}, basicOption, { series: [{
  data: [150, 230, 224, 218, 135, 147, 260],
  type: 'line',
  smooth: true
}] });

const areaOption =  Object.assign({}, basicOption, {
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  series: [{
    data: [150, 230, 224, 218, 135, 147, 260],
    type: 'line',
    areaStyle: {}
  }]
});

const stockedOption = {
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Email',
      type: 'line',
      stack: 'Total',
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Union Ads',
      type: 'line',
      stack: 'Total',
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: 'Video Ads',
      type: 'line',
      stack: 'Total',
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: 'Direct',
      type: 'line',
      stack: 'Total',
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: 'Search Engine',
      type: 'line',
      stack: 'Total',
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ]
};

const lineChartsMap = new Map([
  [LineChart.Basic, basicOption],
  [LineChart.Smoothed, smoothedOption],
  [LineChart.Area, areaOption],
  [LineChart.Stocked, stockedOption],
]);

const lineCharts = [
  LineChart.Basic,
  LineChart.Smoothed,
  LineChart.Area,
  LineChart.Stocked,
].map(key => {
  return {
    name: key.toLocaleLowerCase(),
    option: lineChartsMap.get(key),
  }
});

export default lineCharts;