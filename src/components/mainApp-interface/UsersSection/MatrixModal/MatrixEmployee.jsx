import React, { PureComponent, useEffect } from 'react';
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import useAccessRights from '../../../../utils/useAccessRights';

export function MatrixEmployee({ employee, employeeRates, selectedCriteria, rights }) {

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

    const [formattedData, setFormattedData] = React.useState([]);

    useEffect(() => {
        if (dataRates) {
            const newFormattedData = [];
            selectedCriteria.forEach((criterion) => {

                const entry = { criterion: criterion.NAME, fullMark: 10 };

                entry[employee.id] = dataRates[employee.id][criterion.ID] || 0;

                newFormattedData.push(entry);
            });
            setFormattedData(newFormattedData);
        }
    }, [dataRates]);

    // console.log(formattedData) -> [ {employee.id: userRates[employee.id][criterion.ID], criterion: criterion.NAME, fullMark: 10} ]

    const haveAccess = useAccessRights(rights, employee);

    if (haveAccess === null) {
        return <div>Загрузка...</div>
    }

    if (!haveAccess) {
        return <div>Недостаточно прав</div>
    }

    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={formattedData}>
                <PolarGrid />
                <Tooltip />
                <PolarAngleAxis dataKey="criterion" />
                <PolarRadiusAxis angle={30} domain={[0, 10]} />
                <Radar name={employee.name} dataKey={employee.id} stroke="#8884d8" fill="transparent" fillOpacity={0.6} dot={true} />
                <Legend />
            </RadarChart>
        </ResponsiveContainer>
    );
}