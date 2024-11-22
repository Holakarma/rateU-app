import React from 'react';
import cls from './mainPage.module.css';
import {
	SettingsSection
} from 'components/mainApp-interface/SettingsSection/SettingsSection';
import { SettingsBox } from 'widgets/settingsBox';
import { UserSection } from 'widgets/userSection';
import { HelpModal } from 'widgets/helpModal';

const MainPage = () => {
	const [ showSettings, setShowSettings ] = React.useState(false);
	const [ showHelp, setShowHelp ] = React.useState(false);

	return (
		<>
			<div className="container position-relative">
				<h1 className="text-center mt-2">Статистика</h1>
				<SettingsBox
					setShowSettings={setShowSettings}
					setShowHelp={setShowHelp}
					className={`position-absolute top-0 end-0 d-flex gap-4 ${cls.paddingContainer}`}
				/>
				{showSettings ? (
					<SettingsSection />
				) : (
					<UserSection />
				)}
			</div>
			<HelpModal
				showHelp={showHelp}
				setShowHelp={setShowHelp}
			/>
		</>
	);
};

export default MainPage;
