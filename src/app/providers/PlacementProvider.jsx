import React, { useEffect } from 'react';
import {
	PlacementContext
} from 'shared/model/placementContext';
import { checkMethods } from 'utils/checkMethods';
import { getSectionId } from 'utils/createEntity';

function bindPlacement( handlerUrl ) {
	return new Promise(( resolve, reject ) => {
		BX24.callMethod(
			'placement.bind',
			{
				PLACEMENT: 'TASK_VIEW_TAB',
				HANDLER: handlerUrl
			},
			function( res ) {
				if (res.error()) {
					reject(new Error(res.error().ex.error_description));
				}
				resolve(true);
			}
		);
	});
}

function getBoundPlacements() {
	return new Promise(( resolve, reject ) => {
		BX24.callMethod('placement.get', {}, ( res ) => {
			if (res.error()) {
				reject(new Error(res.error().ex.error_description));
			} else resolve(res.data());
		});
	});
}

const PlacementProvider = ( { children } ) => {

	const [ isReady, setReady ] = React.useState(false);

	const placementInfo = BX24.placement.info(); // Release
	// const placementInfo = {
	//   options: { taskId: '869' },
	//   placement: 'TASK_VIEW_TAB',
	// };

	useEffect(async () => {
		await checkMethods();
		await getSectionId();

		if (placementInfo.placement === 'DEFAULT') {
			let resultArr;
			if (BX24.isAdmin()) {
				resultArr = await getBoundPlacements();

				const correctPlacement = resultArr && resultArr.find(
					( { placement } ) => placement === 'TASK_VIEW_TAB'
				);

				if (!correctPlacement) {
					const handlerUrl =
						window.location.origin + window.location.pathname;

					// Release
					// await bindPlacement(handlerUrl);
				}
			}
		}

		setReady(true);
	}, []);


	if (!isReady) {
		return (
			<div className="containerLoader">
				<div className="loader"></div>
			</div>
		);
	}

	return (
		<PlacementContext.Provider value={placementInfo}>
			{children}
		</PlacementContext.Provider>
	);
};

export default PlacementProvider;