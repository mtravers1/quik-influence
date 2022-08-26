import { FC } from 'react';
import {
  BarChart,
  Bar,
  Brush,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { ChartContainer } from './ChartContainer';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export const CustomBarChart: FC<{
  height?: number;
  data: any;
  dataKeys: string[];
  label?: string;
}> = ({ height, data = [], dataKeys, label }) => {
  return (
    <ChartContainer responsive asFunction label={label}>
      {(colorMode: string) => (
        <ResponsiveContainer width="100%" height={height}>
          <BarChart data={data}>
            <XAxis
              dataKey="name"
              stroke={colorMode === 'dark' ? 'white' : '#333'}
              tick={{ fontSize: 10 }}
            />
            <YAxis stroke={colorMode === 'dark' ? 'white' : '#333'} />
            <Tooltip cursor={{ fill: 'transparent' }} />
            <Legend
              verticalAlign="top"
              wrapperStyle={{ lineHeight: '40px', fontSize: 11 }}
            />
            <Brush dataKey="name" height={20} stroke="#19212d" />

            {dataKeys.map((key, index) => (
              <Bar dataKey={key} fill={colors[index % dataKeys.length]} />
            ))}
          </BarChart>
        </ResponsiveContainer>
      )}
    </ChartContainer>
  );
};
