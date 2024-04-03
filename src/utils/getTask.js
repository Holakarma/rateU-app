export const getTask = (function createSavedTask(savedTasks = []) {
    return function (
        id,
        selectArray = ['ID', 'RESPONSIBLE_ID', 'ACCOMPLICES', 'TITLE', 'CREATED_BY'],
    ) {
        return new Promise((resolve) => {
            let savedTask = savedTasks.find((task) => task.task.id == id);
            if (savedTask) {
                resolve(savedTask);
            } else {
                BX24.callMethod(
                    'tasks.task.get',
                    { taskId: id, select: selectArray },
                    (res) => {
                        savedTask = res.data();
                        savedTasks.push(savedTask);
                        resolve(savedTask);
                    },
                );
            }
        });
    };
})();
