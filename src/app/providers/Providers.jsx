import React from 'react';
import PrimeReact from './PrimeReact';
import PlacementProvider from './PlacementProvider';
import UserProvider from 'app/providers/UserProvider';
import HelpModalProvider
	from 'app/providers/HelpModalProvider';
import { Router } from 'app/router/Router';
import CriterionProvider
	from 'app/providers/CriterionProvider';
import EmployeesListProvider
	from 'app/providers/EmployeesListProvider';
import PeriodProvider from 'app/providers/PeriodProvider';


/* // Мб где то нужно, пока не нашёл
 // function getAppId() {
 // 	return new Promise(( resolve, reject ) => {
 // 		BX24.callMethod('app.info', {}, ( res ) => {
 // 			if (res.error()) {
 // 				reject(new Error(res.error().ex.error_description));
 // 			} else resolve(res.data().ID);
 // 		});
 // 	});
 // }
 */


export function Providers() {
	return (
		<PlacementProvider>
			<PrimeReact>
				<UserProvider>
					<PeriodProvider>
						<CriterionProvider>
							<EmployeesListProvider>
								<HelpModalProvider>
									<Router />
								</HelpModalProvider>
							</EmployeesListProvider>
						</CriterionProvider>
					</PeriodProvider>
				</UserProvider>
			</PrimeReact>
		</PlacementProvider>
	);
}