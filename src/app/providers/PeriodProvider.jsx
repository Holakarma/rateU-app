import React, { useEffect } from 'react';
import { PeriodContext } from 'shared/context/periodContext/periodContext';
import periodLS from 'entities/period/model/periodLS';

const PeriodProvider = ( { children } ) => {
	const [ period, setPeriod ] = React.useState(periodLS());

	useEffect(() => {
		periodLS(true, period);
	}, [ period ]);

	return (
		<PeriodContext.Provider
			value={{
				period,
				setPeriod
			}}>
			{children}
		</PeriodContext.Provider>
	);
};

export default PeriodProvider;
