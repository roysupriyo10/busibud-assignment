import './scss/style.scss';
import { Statistics } from './types';


const main = async () => {
  const response = await fetch('http://localhost:5074/statistic/statistics');
  const statistics: Statistics = await response.json();
  if (!statistics) return
  for (let i = 0; i < statistics.length; i++) {
    const statistic = statistics[i]
    console.log(statistic.title)
  }
};

main();