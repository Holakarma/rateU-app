import React, { PureComponent, useEffect } from 'react';
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';

export function MatrixEmployee({ employee, employeeRates, selectedCriteria }) {

    const [dataRates, setDataRates] = React.useState(null);
    useEffect(() => {
        const aliases = {};
        const rates = employeeRates.map((rate) => (
            [
                [rate.PROPERTY_VALUES.CRITERION_ID], rate.PROPERTY_VALUES.RATE
            ]
        ));

        Object.assign(aliases, {
            [employee.id]: Object.fromEntries(rates)
        })

        setDataRates(aliases);
    }, [employee, employeeRates])

    // console.log(dataRates) -> {criterion.ID: 'mark'}

    console.log(employeeRates)

    // const [formattedData, setFormattedData] = React.useState([]);

    // useEffect(() => {
    //     if (dataRates) {
    //         const newFormattedData = [];
    //         selectedCriteria.forEach((criterion) => {
    //             const entry = { criterion: criterion.NAME, fullMark: 10 };

    //             employees.forEach((empl) => {
    //                 entry[empl.id] = dataRates[empl.id][criterion.NAME] || 0;
    //             });

    //             newFormattedData.push(entry);
    //         });
    //         setFormattedData(newFormattedData);
    //     }
    // }, [dataRates]);

    const data =
        [
            {
                subject: 'HTML',
                rate: 10,
                fullMark: 10,
            },
            {
                subject: 'CSS',
                rate: 9,
                fullMark: 10,
            },
            {
                subject: 'Ответственность',
                rate: 8,
                fullMark: 10,
            },
            {
                subject: 'Пунктуальность',
                rate: 9,
                fullMark: 10,
            },
            {
                subject: 'JavaScript',
                rate: 8,
                fullMark: 10,
            },
            {
                subject: 'React',
                rate: 6,
                fullMark: 10,
            },
        ];

    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                <PolarGrid />
                <Tooltip />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={30} domain={[0, 10]} />
                <Radar name={employee.name} dataKey="rate" stroke="#8884d8" fill="transparent" fillOpacity={0.6} dot={true} />
                <Legend />
            </RadarChart>
        </ResponsiveContainer>
    );
}