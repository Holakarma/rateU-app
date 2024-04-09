import { getUserInfo } from './getUserInfo';

export function isAllowed(task, userInfo) {
    return new Promise(async (resolve) => {
        if (BX24.isAdmin()) {
            resolve('isAdmin');
        } else {
            if (task) {
                if (!userInfo) {
                    userInfo = await getUserInfo();
                }
                if (userInfo?.ID === task?.createdBy) {
                    resolve('isCreator');
                } else {
                    const usersList = task.accomplices.concat(
                        task.responsibleId,
                    );
                    let sub = userInfo.SUBORDINATES.find((sub) =>
                        usersList.includes(sub.ID),
                    );
                    if (sub) {
                        resolve('haveSub');
                    } else {
                        resolve(undefined);
                    }
                }
            } else {
                resolve(undefined);
            }
        }
    })
}
