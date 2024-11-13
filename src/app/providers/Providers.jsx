import React from 'react';
import {
	Workspace
} from '../../components/Workspace/Workspace';
import PrimeReact from './PrimeReact';
import PlacementProvider from './PlacementProvider';
import UserProvider from 'app/providers/UserProvider';
import HelpModalProvider
	from 'app/providers/HelpModalProvider';


/* // Мб где то нужно, пока не нашёл
function getAppId() {
	return new Promise(( resolve, reject ) => {
		BX24.callMethod('app.info', {}, ( res ) => {
			if (res.error()) {
				reject(new Error(res.error().ex.error_description));
			} else resolve(res.data().ID);
		});
	});
}
*/


export function Providers() {
	return (
		<PlacementProvider>
			<PrimeReact>
				<UserProvider>
					<HelpModalProvider>
						<Workspace />
					</HelpModalProvider>
				</UserProvider>
			</PrimeReact>
		</PlacementProvider>
	);
}