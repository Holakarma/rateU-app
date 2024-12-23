import { useAverageRates } from 'entities/rate';
import React, { useEffect } from 'react';
import useAccessRights
	from 'entities/user/hooks/useAccessRights';
import {
	Legend,
	PolarAngleAxis,
	PolarGrid,
	PolarRadiusAxis,
	Radar,
	RadarChart,
	ResponsiveContainer,
	Tooltip
} from 'recharts';

const MatrixEmployee = ( {
							 employee,
							 selectedCriteria,
							 rights
						 } ) => {
	const { aliasedRates } = useAverageRates();

	const [ formattedData, setFormattedData ] = React.useState([]);

	useEffect(() => {
		if (aliasedRates) {
			const newFormattedData = [];
			selectedCriteria.forEach(( criterion ) => {

				const entry = {
					criterion: criterion.NAME,
					fullMark: 10
				};

				entry[employee.id] = aliasedRates[employee.id][criterion.ID] || 0;

				newFormattedData.push(entry);
			});
			setFormattedData(newFormattedData);
		}
	}, [ aliasedRates ]);

	const haveAccess = useAccessRights(rights, employee);

	if (haveAccess === null || !aliasedRates) {
		return <div>Загрузка...</div>;
	}

	if (!haveAccess) {
		return <div>Недостаточно прав</div>;
	}

	return (
		<ResponsiveContainer width="100%" height="100%">
			<RadarChart cx="50%" cy="50%" outerRadius="80%"
						data={formattedData}>
				<PolarGrid />
				<Tooltip />
				<PolarAngleAxis dataKey="criterion" />
				<PolarRadiusAxis angle={30}
								 domain={[ 0, 10 ]} />
				<Radar name={employee.name}
					   dataKey={employee.id}
					   stroke="#8884d8" fill="transparent"
					   fillOpacity={0.6} dot={true} />
				<Legend />
			</RadarChart>
		</ResponsiveContainer>
	);
};

export default MatrixEmployee;