
import React from 'react';
import {
    Flex,
    Heading,
    Text,
    useColorMode
} from "@chakra-ui/react";
import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from 'recharts'
import { cardThemeColor } from "utils/constants/colorConstants";
import ChartsHeader from './ChartsHeader';

const data = [
    {
        name: "Moday",
        value: 4000,
    },
    {
        name: "Tuesday",
        value: 3000,
    },
    {
        name: "Wednesday",
        value: 2000,
    },
    {
        name: "Thursday",
        value: 2780,
    },
    {
        name: "Friday",
        value: 1890,
    },
];

const style = {
    top: 290,
    left: 0,
    lineHeight: "4px"
};

 

const Revenue: React.FC = ({ }) => {
    const { colorMode } = useColorMode();

    return (
        <Flex
            padding={[6, 8]}
            flexDirection="column"
        >
            <ChartsHeader title="Revenue" />
            <Flex wrap='wrap' width="100%">
                <Heading size="xl" width="100%">$129,812.00</Heading>
                <Text fontSize="md">Won from 290 Deals</Text>
            </Flex>
            <Flex justifyContent="center" width="100%"  >
                <ResponsiveContainer width="100%" height={315}>
                    <AreaChart
                        width={420}
                        height={220}
                        data={data}
                        margin={{
                            top: 10,
                            right: 0,
                            left: 0,
                            bottom: 0
                        }}
                    >
                        <Tooltip />
                        <Area type="natural" fillOpacity={0.4} dataKey="value" stroke="#FF974A" fill="#FFB177" />
                    </AreaChart>
                </ResponsiveContainer>
            </Flex>
            <Flex>

            </Flex>
        </Flex>
    )
}
export default Revenue;