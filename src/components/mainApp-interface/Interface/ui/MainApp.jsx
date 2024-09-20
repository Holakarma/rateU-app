import React, { useEffect } from 'react';
import { sectionNames } from '../../../../utils/aliases';
import { SettingsButton } from '../../SettingsSection/SettingsButton/SettingsButton';
import { SettingsSection } from '../../SettingsSection/SettingsSection';
import { UserSection } from '../../UsersSection/UserSection';
import { HelpModal } from '../../SettingsSection/HelpModal/HelpModal';
import { Help } from '../../../../icons/Help/Help';
import cls from './mainApp.module.css'
import { savePeriod } from '../../../../utils/saveToLS';
import { getRates } from '../../../../utils/getRates';
import { ErrorContext } from '../../../../utils/errorContext';

function openSection(name, props) {
    switch (name) {
        case sectionNames.USERS:
            return <UserSection {...props} />;
    }
}

const MainApp = () => {
    const [openedSection, setSection] = React.useState({
        isSettings: false,
        section: sectionNames.USERS,
    });

    const setError = React.useContext(ErrorContext);

    let savedPeriod = savePeriod();
    const [period, setPeriod] = React.useState(savedPeriod);
    const [fetchedRates, setFetchedRates] = React.useState([]);
    const [selectedCriteria, setSelectedCriteria] = React.useState([]);
    const allRates = React.useRef([]);

    useEffect(async () => {
        allRates.current = await getRates(true).catch((e) => setError(e));
    }, []);

    useEffect(async () => {
        savePeriod(true, period);
        allRates.current = await getRates(false, period).catch((e) =>
            setError(e),
        );

        setFetchedRates(allRates.current);
    }, [period]);

    useEffect(() => {
        const ratesCriteria = allRates.current.filter((rateValue) =>
            selectedCriteria.find(
                (sc) => rateValue.PROPERTY_VALUES.CRITERION_ID === sc.ID,
            ),
        );
        setFetchedRates(ratesCriteria);
    }, [selectedCriteria]);

    const [showHelp, setShowHelp] = React.useState(false);

    return (
        <div className="container position-relative">
            <h1 className="text-center mt-2">Статистика</h1>
            <div className={`position-absolute top-0 end-0 d-flex gap-4 ${cls.paddingContainer}`}>
                <SettingsButton
                    setSection={setSection}
                    openedSection={openedSection}
                />
                <button
                    className="btn p-0 opacity-75"
                    onClick={() => setShowHelp(true)}
                >
                    <Help size={25} />
                </button>
            </div>
            {openedSection.isSettings ? (
                <SettingsSection />
            ) : (
                openSection(
                    openedSection.section, {
                    setSelectedCriteria,
                    setPeriod,
                    period,
                    selectedCriteria,
                    fetchedRates,
                })
            )}
            <HelpModal
                showHelp={showHelp}
                setShowHelp={setShowHelp}
            />
        </div>
    );
};

export default MainApp;
