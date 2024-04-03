import React, { useEffect } from 'react';
import { Workspace } from './components/Workspace/Workspace';
import { getSectionId } from './utils/createEntity';
import { PlacementContext } from './utils/placementContext';
import { UserContext } from './utils/userContext';
import { PrimeReactProvider } from 'primereact/api';
import { addLocale } from 'primereact/api';
import { locale } from './utils/localePR';

// BX24.callMethod('entity.delete', {ENTITY: 'rates'}, res => {console.log(res)})

// BX24.callMethod('department.get', {}, res => {
//     console.log(res.data())
// })

async function getUserInfo() {
    return new Promise((resolve) => {
        BX24.callMethod('user.current', {}, (res) => {
            resolve(res.data());
        });
    });
}

export function App() {
    addLocale('ru', locale);
    const lang = 'ru';
    const [isReady, setReady] = React.useState(false);
    let [userInfo, setUserInfo] = React.useState();
    // const placementInfo = BX24.placement.info(); // Release version
    const placementInfo = {
        options: { taskId: '795' },
        placement: 'TASK_VIEW_TAB',
    };
    useEffect(async () => {
        setUserInfo(await getUserInfo());
        getSectionId().then((result) => {
            if (placementInfo.placement === 'DEFAULT') {
                BX24.callMethod('app.info', {}, (res) => {
                    let id = res.data().ID;

                    // BX24.callMethod(
                    //     'placement.unbind',
                    //     {
                    //         PLACEMENT: 'TASK_VIEW_TAB',
                    //     },
                    //     function (res) {
                    //         console.log(res);
                    //         BX24.installFinish();
                    //         setReady(true);
                    //     },
                    // );

                    BX24.callMethod('placement.get', {}, async (res) => {
                        const resultArr = res.data();
                        if (
                            resultArr.length &&
                            resultArr[0].placement === 'TASK_VIEW_TAB'
                        ) {
                            BX24.installFinish();
                            setReady(true);
                        } else {
                            // For the release
                            /* const handlerUrl = `https://${BX24.getDomain()}/marketplace/app/${id}/`; // Release version
                            BX24.callMethod(
                            "placement.bind",
                            {
                                PLACEMENT: "TASK_VIEW_TAB",
                                HANDLER: handlerUrl,
                            },
                            function (res) {
                                console.log('placed status', res);
                                BX24.installFinish();
                                setReady(true);
                            },
                            ); */
                            BX24.installFinish();
                            setReady(true);
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
