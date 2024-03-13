import React, { Suspense, useEffect } from "react";
import { MainApp } from "../mainApp-interface/Interface";
import { PlacementApp } from "../placementApp-interface/interface";

export function Workspace({ placementInfo }) {
    return (
        <Suspense
            fallback={
                <div className="d-flex justify-content-center">
                    <div className="spinner-border">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            }>
            {placementInfo.placement === "DEFAULT" ? <MainApp/> : <PlacementApp />}
        </Suspense>
    );
}
