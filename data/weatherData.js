const data = [
  {
    date: "2020-11-15",
    temperature: `+${(Math.random() * 10).toFixed(2)}`,
  },
  {
    date: "2020-11-16",
    temperature: `+${(Math.random() * 10).toFixed(2)}`,
  },
  {
    date: "2020-11-17",
    temperature: `+${(Math.random() * 10).toFixed(2)}`,
  },
  {
    date: "2020-11-18",
    temperature: `+${(Math.random() * 10).toFixed(2)}`,
  },
  {
    date: "2020-11-19",
    temperature: `+${(Math.random() * 10).toFixed(2)}`,
  },
  {
    date: "2020-11-20",
    temperature: `+${(Math.random() * 10).toFixed(2)}`,
  },
  {
    date: "2020-11-21",
    temperature: `+${(Math.random() * 10).toFixed(2)}`,
  },
  {
    date: "2020-11-22",
    temperature: `+${(Math.random() * 10).toFixed(2)}`,
  },
  {
    date: "2020-11-23",
    temperature: `+${(Math.random() * 10).toFixed(2)}`,
  },
  {
    date: "2020-11-24",
    temperature: `+${(Math.random() * 10).toFixed(2)}`,
  },
  {
    date: "2020-11-25",
    temperature: `+${(Math.random() * 10).toFixed(2)}`,
  },
];

const exampleData = {
  city: "Krasnodar",
  tenDaysWeather: JSON.stringify(data),
};

module.exports = exampleData;
