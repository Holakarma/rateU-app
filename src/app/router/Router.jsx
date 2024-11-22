import React, { Suspense, useContext } from 'react';
import {
	PlacementContext
} from 'shared/model/placementContext';
import { Loader } from 'shared/ui/loader';
import { MainPage } from 'pages/mainPage';
import { PlacementPage } from 'pages/placementPage';

export function Router() {
	const placementInfo = useContext(PlacementContext);

	if (placementInfo.placement === 'DEFAULT') {
		return (
			<Suspense
				fallback={<Loader />}
			>
				<MainPage />
			</Suspense>
		);
	}

	if (placementInfo.placement === 'TASK_VIEW_TAB') {
		return (
			<Suspense
				fallback={<Loader />}
			>
				<PlacementPage />
			</Suspense>
		);
	}

	// default case
	return (
		<Suspense
			fallback={<Loader />}
		>
			<MainPage />
		</Suspense>
	);
}
