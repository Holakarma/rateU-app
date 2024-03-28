export const getCurrentUser = (function createSavedUser(currentUser) {
    return function () {
        return new Promise((resolve) => {
            if (currentUser) {
                resolve(currentUser);
            } else {
                BX24.callMethod('user.current', {}, res => {
                    currentUser = res.data();
                    resolve(currentUser);
                })
            }
        });
    };
})();
