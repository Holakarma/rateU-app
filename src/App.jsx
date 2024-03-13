import React, { useEffect } from 'react';
import { Workspace } from './components/Workspace/Workspace';
import { getSectionId } from './utils/createEntity';

export function App() {
    const [isReady, setReady] = React.useState(false);
    // const placementInfo = BX24.placement.info(); // Re;ease version
    const placementInfo = 'TASK_VIEW_TAB';
    useEffect(() => {
        getSectionId().then((result) => {
            // setSectionId(result);
            if (placementInfo.placement === 'DEFAULT') {
                const handlerUrl = window.location.href; // Release version
                // const handlerUrl = "https://avtorit24.ru/marketplace/app/120/";

                /* BX24.callMethod(
                "placement.unbind",
                {
                    PLACEMENT: "TASK_VIEW_TAB",
                },
                function (res) {
                    console.log(res);
                    BX24.installFinish();
                    setReady(true);
                },
            ); */

                BX24.callMethod('placement.get', {}, (res) => {
                    const resultArr = res.data();

                    if (
                        resultArr.length &&
                        resultArr[0].placement === 'TASK_VIEW_TAB'
                    ) {
                        BX24.installFinish();
                        console.log(placementInfo);
                        setReady(true);
                    } else {
                        // For the tests
                        /* BX24.callMethod(
                        "placement.bind",
                        {
                            PLACEMENT: "TASK_VIEW_TAB",
                            HANDLER: handlerUrl,
                        },
                        function (res) {
                            console.log(res);
                            BX24.installFinish();
                            setReady(true);
                        },
                    ); */

                        BX24.installFinish();
                        setReady(true);
                    }
                });
            } else {
                setReady(true);
                console.log(BX24.placement.info());
            }
        });
    });

    return isReady ? (
        <Workspace placementInfo={placementInfo} />
    ) : (
        <div className="d-flex justify-content-center">
            <div className="spinner-grow">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}
