let cost = 5000;

let studentCount = [];
let costPerStudent = [];
let showLine = [];

for (let students = 1; students < 100; students += 4) {
  studentCount.push(students);
  costPerStudent.push(cost / students);
  showLine.push(cost / 24);
}

let lineChartData = {
  // A labels array that can contain any sort of values
  labels: studentCount,
  // Our series array that contains series objects or in this case series data arrays
  series: [{
    name: 'series-1',
    data: costPerStudent
  }, {
    name: 'series-2',
    data: showLine
  }]
};

// Create a new line chart object where as first parameter we pass in a selector
// that is resolving to our chart container element. The Second parameter
// is the actual data object.
new Chartist.Line('.ct-chart', lineChartData, {
  series: {
    'series-1': {
      showPoint: false
    },
    'series-2': {
      showPoint: false,
      showLine: false,
      showArea: true
    }
  },
  chartPadding: {
    top: 20,
    right: 0,
    bottom: 30,
    left: 10
  },
  plugins: [
    Chartist.plugins.ctAxisTitle({
      axisX: {
        axisTitle: "Student Number",
        axisClass: "ct-axis-title",
        offset: {
          x: 0,
          y: 40
        },
        textAnchor: "middle"
      },
      axisY: {
        axisTitle: "Cost for Student",
        axisClass: "ct-axis-title",
        offset: {
          x: -10,
          y: -1
        },
        flipTitle: false
      }
    })
  ]
});

data = {
  labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
  series: [
    [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
  ]
};

var options = {
  high: 10,
  low: -10,
  axisX: {
    labelInterpolationFnc: function (value, index) {
      return index % 2 === 0 ? value : null;
    }
  }
};

new Chartist.Bar('.costBar', data, options);