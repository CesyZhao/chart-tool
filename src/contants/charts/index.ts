import lineCharts from "./line";

enum ChartCategory {
  Line = 'Line',
  Bar = 'Bar',
  Pie = 'Pie',
  Scatter = 'Scatter',
  Radar = 'Radar',
  Graph = 'Graph',
  Sunburst = 'Sunburst',
  Gauge = 'Guage',
}

const categoryMap = new Map([
  [ChartCategory.Line, lineCharts],
  [ChartCategory.Bar, lineCharts],
  [ChartCategory.Pie, lineCharts],
  [ChartCategory.Scatter, lineCharts],
  [ChartCategory.Radar, lineCharts],
  [ChartCategory.Graph, lineCharts],
  [ChartCategory.Sunburst, lineCharts],
  [ChartCategory.Gauge, lineCharts],
])

const categories = [
  ChartCategory.Line,
  ChartCategory.Bar,
  ChartCategory.Pie,
  ChartCategory.Scatter,
  ChartCategory.Radar,
  ChartCategory.Graph,
  ChartCategory.Sunburst,
  ChartCategory.Gauge,
].map(c => {
  return {
    category: c,
    charts: categoryMap.get(c),
  }
})


export default categories;

// enum BarChart {
//   Basic = 'Basic',
//   Waterfall = 'Waterfall',
//   WithNegative = 'WithNegative',
//   PolarBar = 'PolarBar',
//   BarRace = 'BarRace',
// }

// enum PieChart {
//   Basic = 'Basic',
//   Doughnut = 'Doughnut',
//   Nightingale = 'Nightingale',
// }

// enum ScatterChart {
//   Basic = 'Basic',
//   Clustering = 'Clustering',
//   Effect = 'Effect',
//   Polynomial = 'Polynomial',
// }

// enum RadarChart {
//   Basic = 'Basic',
//   AQI = 'AQI',
//   Multiple = 'Multiple',
// }

// enum GraphChart {
//   Basic = 'Basic',
//   Relationship = 'Relationship',
//   Dynamic = 'Dynamic',
// }

// enum SunburstChart {
//   Basic = 'Basic',
//   Rounded = 'Rounded',
//   Monochrome = 'Monochrome',
// }

// enum GaugeChart {
//   Basic = 'Basic',
//   Grogress = 'Grogress',
//   MultiTitle = 'MultiTitle',
//   Ring = 'Ring',
//   Clock = 'Clock',
// }