import React from 'react';
import {
	CriterionContext
} from 'shared/context/criterionContext/CriterionContext';

const CriterionProvider = ( { children } ) => {
	const [ criteria, setCriteria ] = React.useState([]);

	return (
		<CriterionContext.Provider
			value={{ criteria, setCriteria }}>
			{children}
		</CriterionContext.Provider>
	);
};

export default CriterionProvider;
