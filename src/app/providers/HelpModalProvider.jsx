import React, { useEffect } from 'react';
import {
	HelpModal
} from 'components/mainApp-interface/SettingsSection/HelpModal/HelpModal';

const HelpModalProvider = ( { children } ) => {
	const [ showHelp, setShowHelp ] = React.useState(false);

	useEffect(() => {
		(async () => {
			BX24.callMethod('user.option.get', {}, ( res ) => {
				if (res.data().length === 0) {
					setShowHelp(true);
					BX24.callMethod(
						'user.option.set',
						{
							options: {
								visited: true
							}
						},
						( res ) => {
							if (res.error()) {
								throw new Error(
									res.error().ex.error_description
								);
							}
						}
					);
				}
			});
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