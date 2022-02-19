import React from 'react';
import { Flex } from '@chakra-ui/react';
import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  Legend,
} from 'recharts';
import ChartsHeader from './ChartsHeader';

const data = [
  {
    name: 'Spam',
    value: 160,
    fill: '#FF974A',
  },
  {
    name: 'Open',
    value: 560,
    fill: '#82C43C',
  },
  {
    name: 'Send',
    value: 860,
    fill: '#A461D8',
  },
];

const style = {
  top: 290,
  left: 0,
  lineHeight: '4px',
};

const EmailConversions: React.FC = ({}) => {
  return (
    <Flex padding={[6, 8]} flexDirection="column">
      <ChartsHeader title="Email Conversions" />
      <Flex justifyContent="center" width="100%" mt="-20px">
        <ResponsiveContainer width={300} height={315}>
          <RadialBarChart
            width={420}
            height={220}
            cx={150}
            cy={150}
            innerRadius={15}
            outerRadius={140}
            barSize={15}
            data={data}
          >
            <RadialBar
              label={{ position: 'insideStart', fill: '#fff' }}
              background
              dataKey="value"
            />
            <Legend
              iconSize={10}
              width={220}
              height={140}
              layout="horizontal"
              wrapperStyle={style}
              verticalAlign="top"
              align="center"
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </Flex>
    </Flex>
  );
};
export default EmailConversions;
