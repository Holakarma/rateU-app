export const getTask = (function createSavedTask(savedTask) {
    return function(id, selectArray=['ID', 'RESPONSIBLE_ID', 'ACCOMPLICES', 'TITLE']) {
        return new Promise(resolve => {
            if (savedTask) {
                resolve(savedTask);
            }
            BX24.callMethod('tasks.task.get', {taskId: id, select:selectArray}, res => {
                savedTask = res.data()
                resolve(savedTask);
            })
        })
    }
})()