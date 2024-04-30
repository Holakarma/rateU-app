import React, { useEffect, useContext } from 'react';
import { Workspace } from '../Workspace/Workspace';
import { PlacementContext } from '../../utils/placementContext';
import { UserContext } from '../../utils/userContext';
import { PrimeReactProvider } from 'primereact/api';
import { getSectionId } from '../../utils/createEntity';
import { addLocale } from 'primereact/api';
import { locale } from '../../utils/localePR';
import { getUserInfo } from '../../utils/getUserInfo';
import { ErrorContext } from '../../utils/errorContext';
import { HelpModal } from '../mainApp-interface/SettingsSection/HelpModal/HelpModal';

// BX24.callMethod('entity.delete', {ENTITY: 'rates'}, res => {
//     console.log(res)
// })

// BX24.callMethod(
//     'placement.unbind',
//     {
//         PLACEMENT: 'TASK_VIEW_TAB',
//     },
//     function (res) {
//         console.log(res);
//     },
// );

function bindPlacemenet(handlerUrl) {
    return new Promise((resolve, reject) => {
        BX24.callMethod(
            'placement.bind',
            {
                PLACEMENT: 'TASK_VIEW_TAB',
                HANDLER: handlerUrl,
            },
            function (res) {
                if (res.error()) {
                    reject(new Error(res.error().ex.error_description));
                }
                resolve(true);
            },
        );
    });
}

function getAppId() {
    return new Promise((resolve, reject) => {
        BX24.callMethod('app.info', {}, (res) => {
            if (res.error()) {
                reject(new Error(res.error().ex.error_description));
            } else resolve(res.data().ID);
        });
    });
}

function getPlacement() {
    return new Promise((resolve, reject) => {
        BX24.callMethod('placement.get', {}, async (res) => {
            if (res.error()) {
                reject(new Error(res.error().ex.error_description));
            } else resolve(res.data());
        });
    });
}

export function Providers() {
    addLocale('ru', locale);
    const lang = 'ru';
    const [isReady, setReady] = React.useState(false);
    let [userInfo, setUserInfo] = React.useState();
    const placementInfo = BX24.placement.info(); // Release version
    // const placementInfo = {
    //     options: { taskId: '549' },
    //     placement: 'TASK_VIEW_TAB',
    // };

    const setError = useContext(ErrorContext);

    const [showHelp, setShowHelp] = React.useState(false);

    useEffect(async () => {
        try {
            setUserInfo(await getUserInfo());
            await getSectionId();
            if (placementInfo.placement === 'DEFAULT') {
                let resultArr;
                if (BX24.isAdmin()) {
                    resultArr = await getPlacement();
                }
                if (
                    resultArr?.length &&
                    resultArr[0].placement === 'TASK_VIEW_TAB'
                ) {
                    setReady(true);
                } else {
                    if (BX24.isAdmin()) {
                        const handlerUrl =
                            window.location.origin + window.location.pathname; // Release version
                        setReady(await bindPlacemenet(handlerUrl)); // Release version
                        // setReady(true);
                    } else {
                        setReady(true);
                    }
                }

                BX24.callMethod('user.option.get', {}, (res) => {
                    if (res.data().length === 0) {
                        setShowHelp(true);
                        BX24.callMethod(
                            'user.option.set',
                            {
                                options: {
                                    visited: true,
                                },
                            },
                            (res) => {
                                if (res.error()) {
                                    throw new Error(
                                        res.error().ex.error_description,
                                    );
                                }
                            },
                        );
                    }
                });
            } else {
                setReady(true);
            }
        } catch (e) {
            setError(e);
        }
    }, []);
    return (
        <>
            {isReady ? (
                <PrimeReactProvider value={lang}>
                    <PlacementContext.Provider value={placementInfo}>
                        <UserContext.Provider value={userInfo}>
                            <Workspace />
                        </UserContext.Provider>
                    </PlacementContext.Provider>
                </PrimeReactProvider>
            ) : (
                <div className="containerLoader">
                    <div className="loader"></div>
                </div>
            )}
            <HelpModal
                showHelp={showHelp}
                setShowHelp={setShowHelp}
            />
        </>
    );
}
