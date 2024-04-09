export async function getUserInfo() {
    return new Promise((resolve) => {
        BX24.callMethod('user.current', {}, (res) => {
            const user = res.data();
            let departmentsArray = [];
            BX24.callMethod('department.get', {}, async (result) => {
                departmentsArray = departmentsArray.concat(result.data());
                if (result.more()) {
                    result.next();
                    return;
                }
                const subordinates = await getSubordinates(
                    user,
                    departmentsArray,
                );
                resolve({ ...user, SUBORDINATES: subordinates });
            });
        });
    });
}

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
    return new Promise((resolve) => {
        const headedDepartment = departments.find((d) => d.UF_HEAD === user.ID);
        if (!headedDepartment) {
            resolve([]);
            return;
        }
        let usersArray = [];
        let subordinatesArray = [];
        BX24.callMethod('user.get', { FILTER: { ACTIVE: true } }, (res) => {
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

