export const getUsers = (function createSavedUsers(savedUsers = []) {
    return function (usersId) {
        if (usersId) {
            let arResult = [];
            let needToFetch = [];
            usersId.forEach((id) => {
                const savedUser = savedUsers.find(
                    (savedUser) => savedUser.ID == id,
                );
                if (savedUser) {
                    arResult.push(savedUser);
                } else {
                    needToFetch.push(id);
                }
            });
            const fetchBatch = [];
            return new Promise((resolve, reject) => {
                if (needToFetch.length != 0) {
                    needToFetch.map((id) => {
                        fetchBatch.push(["user.search", { ID: id }]);
                    });
                    BX24.callBatch(fetchBatch, function (result) {
                        result.forEach((res) => {
                            if (res.error()) {
                                reject(new Error(res.error().ex.error_description));
                                return;
                            } else {
                                savedUsers.push(res.data()?.at(0));
                                arResult.push(res.data()?.at(0));
                            }
                        });
                        resolve(arResult);
                    })
                } else {
                    resolve(arResult);
                }
            });
        }
    };
})();
