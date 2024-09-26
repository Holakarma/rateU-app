import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';

export function Matrix({ employee, employeeRates, criteria, }) {

    // const subjects = criteria.map((item) => ({
    //     subject: item.NAME
    // }))

    // console.log(subjects)

    // employeeRates
    // const [rate, setRate] = React.useState([
    //     {
    //         idCrit: 0,
    //         rate: 0,
    //     }
    // ]);

    // // criteria
    // const [name, setName] = React.useState([
    //     {
    //         id: 0,
    //         name: 0,
    //     }
    // ]);

    // employeeRates.forEach((item) => {
    //     setRate(prev => [...prev,
    //     {
    //         idCrit: item.PROPERTY_VALUES.CRITERION_ID,
    //         rate: item.PROPERTY_VALUES.RATE,
    //     }
    //     ])
    //     criteria.forEach((item) => {
    //         setName(prev => [...prev,
    //         {
    //             id: item.ID,
    //             name: item.NAME,
    //         }
    //         ])
    //     })
    // })

    // console.log("rate", rate)
    // console.log("name", name)

    const data =
        // criteria.map((item, index) => ({
        //     subject: criteria.NAME,
        //     rate: item.RATE,
        //     fullMark: 10
        // }));
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