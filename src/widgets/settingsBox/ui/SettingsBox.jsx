import React from 'react';
import {
	SettingsButton
} from 'components/mainApp-interface/SettingsSection/SettingsButton/SettingsButton';
import { Help } from 'icons/Help/help';

const SettingsBox = ( { setShowSettings, setShowHelp, ...props } ) => {
	return (
		<div
			{...props}
		>
			<SettingsButton
				setShowSettings={setShowSettings}
			/>
			<button
				className="btn p-0 opacity-75"
				onClick={() => setShowHelp(true)}
			>
				<Help size={25} />
			</button>
		</div>
	);
};

export default SettingsBox;