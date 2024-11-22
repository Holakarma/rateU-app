export const getAllUsers = (function createSavedUsers(savedUsers = []) {
    return function () {
        return new Promise((resolve, reject) => {
            if (savedUsers.length) {
                resolve(savedUsers);
                return;
            } else {
                BX24.callMethod('user.get', {}, (res) => {
                    if (res.error()) {
                        reject(new Error(res.error().ex.error_description));
                        return;
                    }
                    savedUsers = res.data();
                    resolve(savedUsers);
                });
            }
        });
    };
})();
