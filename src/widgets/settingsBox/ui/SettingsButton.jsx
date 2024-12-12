import React from 'react';
import { Settings } from 'shared/icons/Settings';

export function SettingsButton( { setShowSettings } ) {
	function clickHandler() {
		setShowSettings(( prev ) => !prev);
	}

	return (
		<button className="btn p-0 opacity-75"
				onClick={clickHandler}>
			<Settings size={30} />
		</button>
	);
}
