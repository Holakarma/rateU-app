import React, { useEffect } from 'react';
import { sectionNames } from '../../../../utils/aliases';
import { SettingsButton } from '../../SettingsSection/SettingsButton/SettingsButton';
import { SettingsSection } from '../../SettingsSection/SettingsSection';
import { UserSection } from '../../UsersSection/UserSection';

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
        allRates.current = await getRates(true);
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

    return (
        <div className="container position-relative">
            <h1 className="text-center mt-2">Статистика</h1>
            <SettingsButton
                setSection={setSection}
                openedSection={openedSection}
            />
            {openedSection.isSettings ? (
                <SettingsSection />
            ) : (
                openSection(openedSection.section, {
                    setSelectedCriteria,
                    setPeriod,
                    period,
                    selectedCriteria,
                    fetchedRates,
                })
            )}
        </div>
    );
};

export default MainApp;
