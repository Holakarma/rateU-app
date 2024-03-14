import React, { Suspense, useContext } from "react";
import { MainApp } from "../mainApp-interface/Interface";
import { PlacementApp } from "../placementApp-interface/interface";
import { PlacementContext } from "../../utils/placementContext";

export function Workspace() {
    const placementInfo = useContext(PlacementContext)
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
