import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';

export function Matrix() {
    const data = [
        {
            subject: 'HTML',
            A: 120,
            fullMark: 150,
        },
        {
            subject: 'CSS',
            A: 98,
            fullMark: 150,
        },
        {
            subject: 'Ответственность',
            A: 86,
            fullMark: 150,
        },
        {
            subject: 'Пунктуальность',
            A: 99,
            fullMark: 150,
        },
        {
            subject: 'JavaScript',
            A: 85,
            fullMark: 150,
        },
        {
            subject: 'React',
            A: 65,
            fullMark: 150,
        },
    ];

    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                <PolarGrid />
                <Tooltip />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={30} domain={[0, 150]} />
                <Radar name="Анастасия Манаева" dataKey="A" stroke="#8884d8" fill="transparent" fillOpacity={0.6} />
                <Legend />
            </RadarChart>
        </ResponsiveContainer>
    );
}