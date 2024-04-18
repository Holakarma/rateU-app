import { getUserInfo } from './getUserInfo';

export function isAllowed(task, usersList, userInfo) {
    return new Promise(async (resolve, reject) => {
        if (BX24.isAdmin()) {
            resolve('isAdmin');
        } else {
            userInfo = await getUserInfo().catch((e) => {
                reject(e);
                return;
            });
            if (task) {
                if (userInfo?.ID === task?.createdBy) {
                    resolve('isCreator');
                    return;
                }
            }
            if (!usersList && task) {
                usersList = task.accomplices.concat(task.responsibleId);
            }
            let sub = userInfo.SUBORDINATES?.find((sub) =>
                usersList?.includes(sub.ID),
            );
            if (sub) {
                resolve('haveSub');
            } else {
                resolve(undefined);
            }
        }
    });
}
