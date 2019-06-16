import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { monthlyPlotComments } from '../../data/HN_stats_yearly_summary';

export default function Example() {
    return (
        <ResponsiveContainer height={300} width="100%">
            <BarChart
                data={monthlyPlotComments}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="period" stroke="white" />
                <YAxis stroke="white" />
                <Tooltip />
                <Legend />
                <Bar name="# salty comments" stackId="a" dataKey="hn_cnt_slt_s" fill="#FE5E01" />
                <Bar name="# all comments" stackId="a" dataKey="hn_overall_without_toxic" fill="#B401B5" />
            </BarChart>
        </ResponsiveContainer>
    );
}