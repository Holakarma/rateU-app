export const getCurrentUser = (function createSavedUser(currentUser) {
    return function () {
        return new Promise((resolve, reject) => {
            if (currentUser) {
                resolve(currentUser);
            } else {
                BX24.callMethod('user.current', {}, (res) => {
                    if (res.error()) {
                        reject(new Error(res.error().ex.error_description));
                        return;
                    }
                    currentUser = res.data();
                    resolve(currentUser);
                });
            }
        });
    };
})();
