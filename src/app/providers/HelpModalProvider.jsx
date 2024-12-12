import React, { useEffect } from 'react';
import {
	getUserOption
} from 'entities/user/api/getUserOption';
import {
	setUserOption
} from 'entities/user/api/setUserOption';
import { HelpModal } from 'widgets/helpModal';

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
