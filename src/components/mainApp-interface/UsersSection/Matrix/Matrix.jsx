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
                    entry[empl.id] = dataRates[empl.id][criterion.NAME] || 0;
                });

                newFormattedData.push(entry);
            });
            setFormattedData(newFormattedData);
        }
    }, [dataRates]);

    // генератор цветов для сотрудников в матрице
    const generateUniqueColors = (numColors) => {
        const colors = [];
        for (let i = 0; i < numColors; i++) {
            colors.push('#' + Math.random().toString(16).slice(-6));
        }
        return colors;
    };
    const colors = generateUniqueColors(allHaveAccess.length);

    if (!allHaveAccess.length || !selectedCriteria.length) return null;
    if (!formattedData) return null;

    return (
        <div style={{ width: '100%', height: '400px' }} className='card'>
            {/* <div>*-1 - нет оценки</div> */}
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={formattedData}>
                    <PolarGrid />
                    <Tooltip />
                    <PolarAngleAxis dataKey="criterion" />
                    <PolarRadiusAxis angle={30} domain={[0, 10]} />
                    {allHaveAccess.map((employee, index) => (

                        <Radar
                            key={employee.id}
                            name={employee.name}
                            dataKey={employee.id}
                            stroke={colors[index]}
                            fill="transparent"
                            fillOpacity={0.6}
                        />
                    ))}
                    <Legend />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}