import React, { useEffect } from 'react';
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import useAccessRights from '../../../../utils/useAccessRights';

export function MatrixEmployee({ employee, employeeRates, selectedCriteria, rights }) {

    const [dataRates, setDataRates] = React.useState(null);
    useEffect(() => {
        const ratesMap = {};

        employeeRates.forEach((rate) => {
            const criterionId = rate.PROPERTY_VALUES.CRITERION_ID;
            const rateValue = parseFloat(rate.PROPERTY_VALUES.RATE);

            if (ratesMap[criterionId]) {
                ratesMap[criterionId].sum += rateValue;
                ratesMap[criterionId].count += 1;
            } else {
                ratesMap[criterionId] = {
                    sum: rateValue,
                    count: 1
                };
            }
        });

        const averageRates = {};
        for (const [id, { sum, count }] of Object.entries(ratesMap)) {
            averageRates[id] = (sum / count).toFixed(1);
        }

        const aliases = {
            [employee.id]: averageRates
        };

        setDataRates(aliases);
    }, [employee, employeeRates]);

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

    const angleOfInclination = Math.abs((360 / selectedCriteria.length) - 90);

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
                <PolarRadiusAxis angle={angleOfInclination} domain={[0, 10]} />
                <Radar name={employee.name} dataKey={employee.id} stroke="#8884d8" fill="transparent" fillOpacity={0.6} dot={true} />
                <Legend />
            </RadarChart>
        </ResponsiveContainer>
    );
}