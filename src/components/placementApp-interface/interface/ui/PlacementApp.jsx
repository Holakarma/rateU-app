import React from 'react';

BX24.callMethod('tasks.task.get', {taskId: '752', select:['ID', 'RESPONSIBLE_ID', 'TITLE']}, res => {
    console.log(res.data())
})

const PlacementApp = () => {
    return (
        <div className="container position-relative">
            <h1>Placement Page</h1>
            
        </div>
    );
};

export default PlacementApp;
