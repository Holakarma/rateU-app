import React from "react";
import { Settings } from "../../../../icons/Settings/Settings";

export function SettingsButton({setSection, openedSection}) {
    function clickHandler() {
        setSection({...openedSection, isSettings: !openedSection.isSettings})
    }
    return (
        <button className="btn position-absolute top-0 end-0" onClick={clickHandler}>
            <Settings size={30}/>
        </button>
    );
}
