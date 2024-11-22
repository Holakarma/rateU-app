import React from 'react';
import {
	CriterionContext
} from 'shared/model/CriterionContext';

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