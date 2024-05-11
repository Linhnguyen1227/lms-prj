import React from 'react';
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  Line,
} from 'recharts';

const CourseChart = ({ coursePurchase }: any) => {
  const courses = coursePurchase.map((item: any) => {
    return {
      title: item.title,
      price: item.price,
      'Tổng số người học': item.purchases.length,
    };
  });

  return (
    <ResponsiveContainer width="80%" height={550}>
      <ComposedChart
        layout="vertical"
        width={500}
        height={400}
        data={courses}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 50,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis type="number" />
        <YAxis dataKey="title" type="category" scale="band" />
        <Tooltip />
        <Legend />
        <Bar className="pr-4" dataKey="Tổng số người học" barSize={30} fill="#06b6d4" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};
export default CourseChart;
