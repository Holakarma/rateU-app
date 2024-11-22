import React, { useEffect } from 'react';
import {
	HelpModal
} from 'components/mainApp-interface/SettingsSection/HelpModal/HelpModal';
import {
	getUserOption
} from 'entities/user/api/getUserOption';
import {
	setUserOption
} from 'entities/user/api/setUserOption';

const HelpModalProvider = ( { children } ) => {
	const [ showHelp, setShowHelp ] = React.useState(false);

	useEffect(() => {
		(async () => {
			const userOptions = await getUserOption();

			if (!userOptions?.visited) {
				setShowHelp(true);
				await setUserOption({
					visited: true
				});
			}

		})();
	}, []);

	return (
		<>
			{children}
			<HelpModal
				showHelp={showHelp}
				setShowHelp={setShowHelp}
			/>
		</>
	);
};

export default HelpModalProvider;