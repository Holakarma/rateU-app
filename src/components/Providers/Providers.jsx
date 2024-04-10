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

    useEffect(async () => {
        setUserInfo(await getUserInfo());
        getSectionId().then((result) => {
            if (placementInfo.placement === 'DEFAULT') {
                BX24.callMethod('app.info', {}, (res) => {
                    let id = res.data().ID;

                    BX24.callMethod('placement.get', {}, async (res) => {
                        const resultArr = res.data();
                        if (
                            resultArr.length &&
                            resultArr[0].placement === 'TASK_VIEW_TAB'
                        ) {
                            setReady(true);
                        } else {
                            const handlerUrl =
                                window.location.origin +
                                window.location.pathname; // Release version
                            try {
                                setReady(await bindPlacemenet(handlerUrl));
                            } catch (e) {
                                setError(e);
                            }
                        }
                    });
                });
            } else {
                setReady(true);
            }
        });
    }, []);
    return isReady ? (
        <PrimeReactProvider value={lang}>
            <PlacementContext.Provider value={placementInfo}>
                <UserContext.Provider value={userInfo}>
                    <Workspace />
                </UserContext.Provider>
            </PlacementContext.Provider>
        </PrimeReactProvider>
    ) : (
        <div className="d-flex justify-content-center">
            <div className="spinner-grow">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}
