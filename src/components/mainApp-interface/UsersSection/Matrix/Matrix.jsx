import React, { useEffect } from 'react';
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import useAccessAllRights from '../../../../utils/useAccessAllRights';

export function Matrix({ userRates, employees, selectedCriteria, rights }) {

    const allHaveAccess = useAccessAllRights(rights, employees); // массив сотрудников, к которым в пользователя есть доступ (админ/подчиненные)
    const [dataRates, setDataRates] = React.useState(null);
    // dataRates = { {critertion.NAME: userRates[employee.id][criterion.ID]} }

    useEffect(() => {
        const aliases = {};
        if (allHaveAccess.length !== 0) {
            allHaveAccess.forEach((e) => {
                const rates = selectedCriteria.map((c) => (
                    [
                        [c.NAME], userRates[e.id][c.ID]
                    ]
                ));

                Object.assign(aliases, {
                    [e.id]: Object.fromEntries(rates)
                })
            });
            setDataRates(aliases);
        }
    }, [allHaveAccess, selectedCriteria, userRates]);

    const [formattedData, setFormattedData] = React.useState([]);
    // formattedData = [ {employee.id: userRates[employee.id][criterion.ID], criterion.NAME, fullMark} ]

    useEffect(() => {
        if (dataRates) {
            const newFormattedData = [];
            selectedCriteria.forEach((criterion) => {
                const entry = { criterion: criterion.NAME, fullMark: 10 };

                allHaveAccess.forEach((empl) => {
                    entry[empl.id] =
                        Number.isInteger(dataRates[empl.id][criterion.NAME])
                            ? dataRates[empl.id][criterion.NAME]
                            : dataRates[empl.id][criterion.NAME].toFixed(1);
                });

                newFormattedData.push(entry);
            });
            setFormattedData(newFormattedData);
        }
    }, [dataRates]);

    const predefinedColors = [
        '#808080', '#FF00FF', '#FF0000', '#808000',
        '#00FF00', '#008080', '#0000FF'
    ];

    const getUniqueColors = (count) => {
        const uniqueColors = [];
        const colorCount = predefinedColors.length;

        for (let i = 0; i < count; i++) {
            const colorIndex = i % colorCount;
            uniqueColors.push(predefinedColors[colorIndex]);
        }

        return uniqueColors;
    };

    const colors = getUniqueColors(allHaveAccess.length);

    const angleOfInclination = Math.abs((360 / selectedCriteria.length) - 90);

    if (!allHaveAccess.length || !selectedCriteria.length) return null;
    if (!formattedData) return null;

    return (
        <div style={{ width: '100%', height: '400px', padding: '10px', paddingBottom: '40px' }} className='card'>
            <h4>Матрица критериев по выбранным сотрудникам</h4>
            <div style={{ opacity: 0.5, display: 'flex', justifyContent: 'end' }}>"-1" - нет оценки</div>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={formattedData}>
                    <PolarGrid />
                    <Tooltip />
                    <PolarAngleAxis dataKey="criterion" />
                    <PolarRadiusAxis angle={angleOfInclination} domain={[0, 10]} />
                    {allHaveAccess.map((employee, index) => (
                        <Radar
                            key={employee.id}
                            name={employee.name}
                            dataKey={employee.id}
                            stroke={colors[index]}
                            fill='transparent'
                            fillOpacity={0.6}
                        />
                    ))}
                    <Legend height={20} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}