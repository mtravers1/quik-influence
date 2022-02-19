
import React from 'react';
import {
    Flex,
    useColorMode
} from "@chakra-ui/react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { cardThemeColor } from "utils/constants/colorConstants";
import ChartsHeader from './ChartsHeader';

const data = [
    {
        name: "Spam",
        value: 160,
        fill: "#FF974A"
    },
    {
        name: "Open",
        value: 560,
        fill: "#82C43C"
    },
    {
        name: "Send",
        value: 860,
        fill: "#A461D8"
    },
];

const style = {
    top: 10,
    left: 0,
    lineHeight: "4px"
};
 

type CustomizedLabelProp = {
    x?: string,
    y?: string,
    stroke?: string,
    value?: string,
}


type CustomizedAxisTickProp = {
    x?: string,
    y?: string,
    stroke?: string,
    payload?: any,
}

const CustomizedLabel: React.FC<CustomizedLabelProp> = (props) => {

    const { x, y, stroke, value } = props;

    return (
        <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
          {value}
        </text>
      );
}
 

const CustomizedAxisTick: React.FC<CustomizedAxisTickProp> = (props) => { 
    const { x, y, stroke, payload } = props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">
          {payload.value}
        </text>
      </g>
    );
}

const Activity: React.FC = ({ }) => {
    const { colorMode } = useColorMode();

    return (
        <Flex
            padding={[6, 8]}
            flexDirection="column"
        >
            <ChartsHeader title="Activity" />
            <Flex justifyContent="center" width="100%" >
                <ResponsiveContainer width={300} height={315}>
                    <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 10,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" label={<CustomizedLabel />} />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </Flex>
            <Flex>

            </Flex>
        </Flex>
    )
}
export default Activity;