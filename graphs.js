
let campCost = 1500;
let preacherCost = 1000;
let bandCost = 600;
let drinks = 400;

let cost = campCost + preacherCost + bandCost + drinks;

let studentCount = [];
let costPerStudent = [];
let showLine = [];

let foodCost = (studentCount) => {
  let cps = 500/50;
  return 50 + (studentCount*cps) * 3;
}


let tbody = document.getElementById('costTable');

for (let students = 1; students < 100; students += 4) {
  let actualCost = cost + foodCost(students);
  studentCount.push(students);
  costPerStudent.push(actualCost / students);
  showLine.push(120);
}

for (let i = 18; i <= 100; i += 8) {
    let row = document.createElement('tr');
    let countData = document.createElement('td');
    let costData = document.createElement('td');
    let actualCost = cost + foodCost(i);
    countData.innerHTML = i;
    costData.innerHTML = `$${Math.round((actualCost/i)*100)/100}`;
    if (actualCost/i > 120) {
      row.classList.add('table-danger');
    } else {
      row.classList.add('table-success');
    }
    row.appendChild(countData);
    row.appendChild(costData);
    tbody.appendChild(row);
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
  high: 400,
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
    left: 20
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
        axisTitle: "Cost per Student",
        axisClass: "ct-axis-title",
        offset: {
          x: -20,
          y: -1
        },
        flipTitle: false
      }
    })
  ]
});

data = {
  labels: ['Preacher', 'Band', 'Food', 'Camp Grounds'],
  series: [preacherCost, bandCost, foodCost(50), campCost]
};



new Chartist.Bar('.costBar', data, {
  distributeSeries: true
});

let costForFifty = preacherCost + bandCost + foodCost(50) + campCost;

document.getElementById('costHeader').innerHTML = `Est. Cost for 50: $${Math.round((costForFifty)*100)/100}`;

new Chartist.Pie('.costPie', {
  labels: ['Preacher', 'Band', 'Food', 'Camp Grounds'],
  series: [preacherCost, bandCost, foodCost(50), campCost]
}, {
  chartPadding: 30,
  labelOffset: 100,
  labelDirection: 'explode',
})