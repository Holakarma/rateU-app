import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';

export function MatrixTemp({ employees, selectedCriteria }) {

    const data = [
        {
            subject: 'HTML',
            A: 10,
            B: 10,
            C: 10,
            D: 8,
            fullMark: 10,
        },
        {
            subject: 'CSS',
            A: 9,
            B: 1,
            C: 3,
            D: 5,
            fullMark: 10,
        },
        {
            subject: 'Ответственность',
            A: 8,
            B: 1,
            C: 6,
            D: 10,
            fullMark: 10,
        },
        {
            subject: 'Пунктуальность',
            A: 9,
            B: 10,
            C: 10,
            D: 7,
            fullMark: 10,
        },
        {
            subject: 'JavaScript',
            A: 8,
            B: 9,
            C: 9,
            D: 8,
            fullMark: 10,
        },
        {
            subject: 'React',
            A: 6,
            B: 8,
            C: 1,
            D: 9,
            fullMark: 10,
        },
    ];
    if (!employees.length || !selectedCriteria.length) return null;
    return (
        <div style={{ width: '100%', height: '400px' }} className='card'>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                    <PolarGrid />
                    <Tooltip />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis angle={30} domain={[0, 10]} />
                    <Radar name="Анастасия Манаева" dataKey="A" stroke="#8884d8" fill="transparent" fillOpacity={0.6} />
                    <Radar name="Кирилл Перетятько" dataKey="B" stroke="#82ca9d" fill="transparent" fillOpacity={0.6} />
                    <Radar name="Ксения Бойко" dataKey="C" stroke="#4a90e2" fill="transparent" fillOpacity={0.6} />
                    <Radar name="Елизавета Цап" dataKey="D" stroke="#f7b733" fill="transparent" fillOpacity={0.6} />
                    <Legend />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}