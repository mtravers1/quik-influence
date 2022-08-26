import { FC } from 'react';
import {
  LineChart,
  Line,
  Brush,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { ChartContainer } from './ChartContainer';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export const CustomLineChart: FC<{
  height?: number;
  data: any;
  dataKeys: string[];
  label?: string;
}> = ({ height, data = [], dataKeys, label }) => {
  return (
    <ChartContainer responsive asFunction label={label}>
      {(colorMode: string) => (
        <ResponsiveContainer width="100%" height={height}>
          <LineChart data={data}>
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
              <Line
                type="monotone"
                dataKey={key}
                fill={colors[index % dataKeys.length]}
                strokeWidth={2}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      )}
    </ChartContainer>
  );
};
