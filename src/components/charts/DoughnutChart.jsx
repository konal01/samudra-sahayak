import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export const DoughnutChart = ({ data, options }) => {
    const canvasRef = useRef(null);
    useEffect(() => {
        if (!canvasRef.current) return;
        const chart = new Chart(canvasRef.current, { type: 'doughnut', data, options });
        return () => chart.destroy();
    }, [data, options]);
    return <canvas ref={canvasRef} className="mx-auto max-h-64"></canvas>;
};
