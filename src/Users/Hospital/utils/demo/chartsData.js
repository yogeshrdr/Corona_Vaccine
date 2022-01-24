import axios from 'axios'

var x=33;
var y=33;
var z=33;
const myFunction=async ()=>{
const token=localStorage.getItem('hospitalToken')
axios.get('http://localhost:4000/api/hospital/getDetails',{
       headers: {
        'authorization': `Bearer ${token}`
       }
     }).then((res)=> {
       console.log("EHAT IS THIS HAPENITINFNS")
       console.log(res)
         if(res.data.success) 
         {
              const obj=res.data.data
              x=obj.Vaccinated
              y=obj.stock
              z=obj.totalAppointment
              //this.setState({stock: obj.stock,todayAppointment: obj.todayAppointment,totalAppointment: obj.totalAppointment,Vaccinated: obj.Vaccinated})
         }

}).catch((err)=>console.log(err))
}

myFunction()
console.log(x)

export const doughnutLegends = [
  { title: 'Vaccinator', color: 'bg-blue-500' },
  { title: 'Avaialble Vaccine', color: 'bg-teal-600' },
  { title: 'Ordered Vaccine', color: 'bg-purple-600' },
]

export const lineLegends = [
  { title: 'Vaccinator', color: 'bg-teal-600' },
  { title: 'Covid Case', color: 'bg-purple-600' },
]

export const barLegends = [
  { title: 'Shoes', color: 'bg-teal-600' },
  { title: 'Bags', color: 'bg-purple-600' },
]


export const doughnutOptions = {
  data: {
    datasets: [
      {
        data: [x, y, z],
        /**
         * These colors come from Tailwind CSS palette
         * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
         */
        backgroundColor: ['#0694a2', '#1c64f2', '#7e3af2'],
        label: 'Dataset 1',
      },
    ],
    labels: ['Vaccinator', 'Available Vaccine', 'Ordered Vaccine'],
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
        label: 'Vaccinator',
        /**
         * These colors come from Tailwind CSS palette
         * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
         */
        backgroundColor: '#0694a2',
        borderColor: '#0694a2',
        data: [43, 48, 40, 54, 67, 73, 70],
        fill: false,
      },
      {
        label: 'Covid Case',
        fill: false,
        /**
         * These colors come from Tailwind CSS palette
         * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
         */
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
        label: 'Shoes',
        backgroundColor: '#0694a2',
        // borderColor: window.chartColors.red,
        borderWidth: 1,
        data: [-3, 14, 52, 74, 33, 90, 70],
      },
      {
        label: 'Bags',
        backgroundColor: '#7e3af2',
        // borderColor: window.chartColors.blue,
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
