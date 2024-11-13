import React, { Suspense, useContext } from 'react';
import { MainApp } from '../mainApp-interface/Interface';
import { PlacementApp } from '../placementApp-interface/interface';
import { PlacementContext } from '../../shared/model/placementContext';

export function Workspace() {
    const placementInfo = useContext(PlacementContext);
    return (
        <Suspense
            fallback={
                <div className='containerLoader'>
                    <div className='loader'></div>
                </div>
            }
        >
            {placementInfo.placement === 'DEFAULT' ? (
                <MainApp />
            ) : (
                <PlacementApp />
            )}
        </Suspense>
    );
}
