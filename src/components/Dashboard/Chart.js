import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    Balance: 1852
  },
  {
    name: "Tue",
    Balance: 1523,
  },
  {
    name: "Wed",
    Balance: 3258,
  },
  {
    name: "Thu",
    Balance: 2852,
  },
  {
    name: "Fri",
    Balance: 3510,
  },
  {
    name: "Sat",
    Balance: 3952,
  },
  {
    name: "Sun",
    Balance: 4123,
  },
];

const Chart = () => {
    return (
        <>
        
        <ResponsiveContainer width="98%" aspect={3}>
        <LineChart
          width={500}
          height={350}
          data={data}
          margin={{
            top: 15,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid  horizontal="true" vertical="" strokeDasharray={5} />
          <XAxis dataKey="name" tick={{fill:"#8A8988"}}/>
          <YAxis tick={{fill:"#8A8988"}} />
          <Tooltip contentStyle={{ backgroundColor: "#8884d8", color: "#fff" }} itemStyle={{ color: "#fff" }} cursor={false}/>
          <Line type="monotone" dataKey="Balance" stroke="#8884d8" strokeWidth="5" dot={{fill:"#2355",stroke:"#8884d8",strokeWidth: 2,r:5}} activeDot={{fill:"#2e4355",stroke:"#8884d8",strokeWidth: 5,r:10}} />
          
        </LineChart>
      </ResponsiveContainer>
    </>
    );
};

export default Chart;