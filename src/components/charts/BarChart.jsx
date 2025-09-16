import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export const BarChart = ({ data, options }) => {
    const canvasRef = useRef(null);
    useEffect(() => {
        if (!canvasRef.current) return;
        const chart = new Chart(canvasRef.current, { type: 'bar', data, options });
        return () => chart.destroy();
    }, [data, options]);
    return <canvas ref={canvasRef}></canvas>;
};
