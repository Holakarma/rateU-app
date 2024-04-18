export const getUserInfo = (function saveUserInfo(savedUser) {
    return async function () {
        return new Promise((resolve, reject) => {
            if (savedUser) {
                resolve(savedUser);
                return;
            }
            BX24.callMethod('user.current', {}, (res) => {
                if (res.error()) {
                    reject(new Error(res.error().ex.error_description));
                    return;
                }
                const user = res.data();
                let departmentsArray = [];
                BX24.callMethod('department.get', {}, async (result) => {
                    if (res.error()) {
                        reject(new Error(res.error().ex.error_description));
                        return;
                    }
                    departmentsArray = departmentsArray.concat(result.data());
                    if (result.more()) {
                        result.next();
                        return;
                    }
                    const subordinates = await getSubordinates(
                        user,
                        departmentsArray,
                    ).catch((e) => {
                        reject(e);
                        return;
                    });
                    savedUser = { ...user, SUBORDINATES: subordinates };
                    resolve(savedUser);
                });
            });
        });
    };
})();

function isSubordinate(department, headedDepartment, departments) {
    let currentDepartment = departments.find((d) => d.ID == department);
    while (currentDepartment?.PARENT) {
        if (currentDepartment.ID == headedDepartment.ID) {
            return true;
        }
        currentDepartment = departments.find(
            (d) => d.ID == currentDepartment.PARENT,
        );
    }
}

function getSubordinates(user, departments) {
    return new Promise((resolve, reject) => {
        const headedDepartment = departments.find((d) => d.UF_HEAD === user.ID);
        if (!headedDepartment) {
            resolve([]);
            return;
        }
        let usersArray = [];
        let subordinatesArray = [];
        BX24.callMethod('user.get', { FILTER: { ACTIVE: true } }, (res) => {
            if (res.error()) {
                reject(new Error(res.error().ex.error_description));
                return;
            }
            usersArray = usersArray.concat(res.data());
            if (res.more()) {
                res.next();
                return;
            }
            usersArray.forEach((user) => {
                const usersDepartmants = user.UF_DEPARTMENT;
                if (usersDepartmants?.length) {
                    usersDepartmants.forEach((department) => {
                        if (
                            isSubordinate(
                                department,
                                headedDepartment,
                                departments,
                            )
                        ) {
                            subordinatesArray.push(user);
                        }
                    });
                }
            });
            resolve(subordinatesArray);
        });
    });
}
