import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Line, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export const LineChart = ({ views = [] }) => {
  const labels = getLastYearMonths();

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Yearly Views',
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'Views',
        data: views,
        borderColor: 'rgba(107,70,193,0.5)',
        backgroundColor: '#6b46c1',
      },
    ],
  };
  return <Line options={options} data={data} />;
};

export const DoughnutChart = ({ users = [] }) => {
  const data = {
    labels: ['subscribed', 'Not Subscribed'],
    datasets: [
      {
        label: 'Views',
        data: users,
        borderColor: ['rgb(62,12,171)', 'rgba(214,43,129)'],
        backgroundColor: ['rgba(62,12,171,0.3)', 'rgba(214,43,129,0.3)'],
        borderWidth: 1,
      },
    ],
  };
  return <Doughnut data={data} />;
};

function getLastYearMonths() {
  const labels = [];

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  //   const currentMonth = new Date().getMonth();
  //   const remain = 10 - currentMonth;

  //   for (let i = currentMonth; i < months.length; i--) {
  //     const element = months[i];
  //     labels.unshift(element);
  //     if (i === 0) break;
  //   }

  //   for (let i = 11; i > remain; i--) {
  //     if (i === currentMonth) break;
  //     const element = months[i];
  //     labels.unshift(element);
  //   }
  //   for (let i = currentMonth; i >= 0; i--) {
  //     const element = months[i];
  //     labels.unshift(element);
  //   }

  //   for (let i = months.length - 1; i > remain; i--) {
  //     const element = months[i];
  //     labels.unshift(element);
  //   }
  //   console.log(labels);
  const currentMonth = new Date().getMonth();

  for (let i = currentMonth - 11; i <= currentMonth; i++) {
    const index = i >= 0 ? i : 12 + i;
    const element = months[index];
    labels.push(element);
  }

  return labels;
}
getLastYearMonths();
