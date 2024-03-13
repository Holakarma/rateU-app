import React from 'react';
import { sectionNames } from '../../../../utils/aliases';
import { SettingsButton } from '../../SettingsSection/SettingsButton/SettingsButton';
import { SettingsSection } from '../../SettingsSection/SettingsSection';
import { UserSection } from '../../UsersSection/UserSection';

const MainApp = () => {
    const [openedSection, setSection] = React.useState({
        isSettings: false,
        section: sectionNames.USERS,
    });

    function openSection(name) {
        switch (name) {
            case sectionNames.USERS:
                return <UserSection />;
        }
    }

    return (
        <div className="container position-relative">
            <h1>Main Page</h1>
            <SettingsButton
                setSection={setSection}
                openedSection={openedSection}
            />
            {openedSection.isSettings ? (
                <SettingsSection />
            ) : (
                openSection(openedSection.section)
            )}
        </div>
    );
};

export default MainApp;
