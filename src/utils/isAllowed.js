export function isAllowed(task, userInfo) {
    console.log(task)
    return new Promise((resolve) => {
        if (BX24.isAdmin()) {
            resolve(true);
        } else {
            if (userInfo) {
                resolve(userInfo === task?.createdBy);
            } else {
                BX24.callMethod('user.current', {}, (res) => {
                    resolve(res.data().ID === task?.createdBy);
                });
            }
        }
    });
}
