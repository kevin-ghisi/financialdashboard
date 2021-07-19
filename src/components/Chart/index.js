import React from 'react';
import {useSelector} from 'react-redux';

import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

import ReactTooltip from 'react-tooltip';   

import styles from './styles.module.scss'

export function Chart() {

    const chartData = useSelector(state => state.chartData);

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
          return (
            <div className={styles.wrapper}>
                 <div className={styles.tooltip}>
                     <span className="label">{`$${payload[0].value}`}</span>
                 </div>
                 <div className={styles.arrowDown}></div>
             </div>
          );
        }

        return null;
      };


    const CustomizedDot = (props) => {
        const { cx, cy, stroke } = props;

        return (
            <circle cx={cx} cy={cy} r={2.5} stroke={stroke} strokeWidth={3} fill="#0047BB" />
        );
    };

    const CustomizedActiveDot = (props) => {
        const { cx, cy } = props;

        return (
            <>
                <circle cx={cx} cy={cy} r={9.5} stroke="#0047BB" strokeWidth={2} fill="#FFF" />
                <circle cx={cx} cy={cy} r={4.5} fill="#0047BB" />
            </>
        );
    };

    return (
        <ResponsiveContainer width="100%" height={274}>
            <AreaChart width={708} height={274} data={chartData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0047BB" stopOpacity={0.26}/>
                    <stop offset="95%" stopColor="#0047BB" stopOpacity={0.01}/>
                    </linearGradient>
                </defs>
                <XAxis tick={{stroke: '#657786'}} stroke="#F5F8FA" dataKey="minute" unit="h"/>
                <YAxis tick={{stroke: '#657786'}} stroke="#F5F8FA" unit="$"/>
                <CartesianGrid stroke="#F5F8FA"/>
                <Tooltip content={CustomTooltip} cursor={{ stroke: '#F5F8FA'}} coordinate={{x: 0, y: 150}}/>
                {/* <Tooltip/> */}
                <Area type="monotone" dataKey="open" stroke="#0047BB" dot={CustomizedDot} activeDot={CustomizedActiveDot} fillOpacity={1} fill="url(#colorValue)" data-tip data-for="tooltip"/>
            </AreaChart>
        </ResponsiveContainer>
    );
}
