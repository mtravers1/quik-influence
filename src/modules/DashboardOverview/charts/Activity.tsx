
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
        name: 'JAN 1',
        SMS: 4000,
        Email: 2400,
        amt: 2400,
    },
    {
        name: 'JAN 2',
        SMS: 3000,
        Email: 1398,
        amt: 2210,
    },
    {
        name: 'JAN 3',
        SMS: 2000,
        Email: 9800,
        amt: 2290,
    },
    {
        name: 'JAN 4',
        SMS: 2780,
        Email: 3908,
        amt: 2000,
    },
    {
        name: 'JAN 5',
        SMS: 1890,
        Email: 4800,
        amt: 2181,
    }
];

const style = {
    top: -20,
    left: 0,
    lineHeight: "4px"
};

 

const Activity: React.FC = ({ }) => {
    const { colorMode } = useColorMode();

    return (
        <Flex
            padding={[6, 8]}
            flexDirection="column"
        >
            <ChartsHeader title="Activity" />
            <Flex justifyContent="center" width="100%" mt="30px" >
                <ResponsiveContainer height={315}>
                    <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend
                            iconSize={10}
                            width={220} 
                            layout="horizontal"
                            wrapperStyle={style}
                            verticalAlign="top"
                            align="center"
                            iconType='square'
                        />
                        <Line type="monotone" dataKey="Email" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="SMS" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </Flex>
            <Flex>

            </Flex>
        </Flex>
    )
}
export default Activity;