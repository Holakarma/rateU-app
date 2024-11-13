import React from 'react';
import {
	addLocale,
	PrimeReactProvider
} from 'primereact/api';
import { locale } from 'shared/model/localePR';

const PrimeReact = ( { children } ) => {
	addLocale('ru', locale);
	const lang = 'ru';

	return (
		<PrimeReactProvider value={lang}>
			{children}
		</PrimeReactProvider>
	);
};

export default PrimeReact;