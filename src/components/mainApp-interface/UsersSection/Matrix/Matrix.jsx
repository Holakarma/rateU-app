import React, { useEffect } from 'react';
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';

export function Matrix({ userRates, employees, selectedCriteria, rights }) {

    // const [employeesHaveAccess, setEmployeesHaveAccess] = React.useState(employees);

    // const haveAccess = useAccessRights(rights, employees);

    // if (haveAccess === null) {
    //     return <div>Загрузка...</div>
    // }

    // if (!haveAccess) {

    // }

    // console.log(employees)

    // dataRates = { {critertion.NAME: userRates[employee.id][criterion.ID]} }
    const [dataRates, setDataRates] = React.useState(null);

    useEffect(() => {
        const aliases = {};
        employees.forEach((e) => {
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
    }, [employees, selectedCriteria, userRates]);

    // formattedData = [ {employee.id: userRates[employee.id][criterion.ID], criterion.NAME, fullMark} ]
    const [formattedData, setFormattedData] = React.useState([]);

    useEffect(() => {
        if (dataRates) {
            const newFormattedData = [];
            selectedCriteria.forEach((criterion) => {
                const entry = { criterion: criterion.NAME, fullMark: 10 };

                employees.forEach((empl) => {
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
    const colors = generateUniqueColors(employees.length);

    if (!employees.length || !selectedCriteria.length) return null;
    if (!formattedData) return null;

    return (
        <div style={{ width: '100%', height: '400px' }} className='card'>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={formattedData}>
                    <PolarGrid />
                    <Tooltip />
                    <PolarAngleAxis dataKey="criterion" />
                    <PolarRadiusAxis angle={30} domain={[0, 10]} />
                    {employees.map((employee, index) => (
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