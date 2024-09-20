import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';

export function Matrix() {
    const data = [
        {
            subject: 'HTML',
            A: 120,
            B: 110,
            C: 100,
            D: 80,
            fullMark: 150,
        },
        {
            subject: 'CSS',
            A: 98,
            B: 130,
            C: 30,
            D: 50,
            fullMark: 150,
        },
        {
            subject: 'Ответственность',
            A: 86,
            B: 130,
            C: 60,
            D: 100,
            fullMark: 150,
        },
        {
            subject: 'Пунктуальность',
            A: 99,
            B: 100,
            C: 150,
            D: 70,
            fullMark: 150,
        },
        {
            subject: 'JavaScript',
            A: 85,
            B: 90,
            C: 99,
            D: 80,
            fullMark: 150,
        },
        {
            subject: 'React',
            A: 65,
            B: 85,
            C: 150,
            D: 95,
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
                <Radar name="Кирилл Перетятько" dataKey="B" stroke="#82ca9d" fill="transparent" fillOpacity={0.6} />
                <Radar name="Ксения Бойко" dataKey="C" stroke="#4a90e2" fill="transparent" fillOpacity={0.6} />
                <Radar name="Елизавета Цап" dataKey="D" stroke="#f7b733" fill="transparent" fillOpacity={0.6} />
                <Legend />
            </RadarChart>
        </ResponsiveContainer>
    );
}