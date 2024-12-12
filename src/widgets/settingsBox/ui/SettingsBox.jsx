import React from 'react';
import {
	SettingsButton
} from 'widgets/settingsBox/ui/SettingsButton';
import { Help } from 'shared/icons/Help';

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
