export const doughnutLegends = [
  { title: 'People Registered', color: 'bg-blue-500' },
  { title: 'Avaialble Hospital', color: 'bg-teal-600' },
  { title: 'Vaccine Manufactured', color: 'bg-purple-600' },
]

export const lineLegends = [
  { title: 'Vaccine Registration', color: 'bg-teal-600' },
  { title: 'Vaccine Avaibilty', color: 'bg-purple-600' },
]

export const barLegends = [
  { title: 'Vaccine Registration', color: 'bg-teal-600' },
  { title: 'Vaccine Avaibilty', color: 'bg-purple-600' },
]

export const doughnutOptions = {
  data: {
    datasets: [
      {
        data: [10000, 5*1000, 7376],
        backgroundColor: ['#0694a2', '#1c64f2', '#7e3af2'],
        label: 'Dataset 1',
      },
    ],
    labels: ['People Registered', 'Avaialble Hospital', 'Vaccine Manufactured'],
  },
  options: {
    responsive: true,
    cutoutPercentage: 80,
  },
  legend: {
    display: false,
  },
}

export const lineOptions = {
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Vaccine Registration',
        backgroundColor: '#0694a2',
        borderColor: '#0694a2',
        data: [43, 48, 40, 54, 67, 73, 70],
        fill: false,
      },
      {
        label: 'Vaccine Avaibilty',
        fill: false,
        backgroundColor: '#7e3af2',
        borderColor: '#7e3af2',
        data: [24, 50, 64, 74, 52, 51, 65],
      },
    ],
  },
  options: {
    responsive: true,
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    hover: {
      mode: 'nearest',
      intersect: true,
    },
    scales: {
      x: {
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Month',
        },
      },
      y: {
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Value',
        },
      },
    },
  },
  legend: {
    display: false,
  },
}

export const barOptions = {
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Vaccine Registration',
        backgroundColor: '#0694a2',
        borderWidth: 1,
        data: [-3, 14, 52, 74, 33, 90, 70],
      },
      {
        label: 'Vaccine Avaibilty',
        backgroundColor: '#7e3af2',
        borderWidth: 1,
        data: [66, 33, 43, 12, 54, 62, 84],
      },
    ],
  },
  options: {
    responsive: true,
  },
  legend: {
    display: false,
  },
}
