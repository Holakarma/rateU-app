import React, { useEffect } from 'react';
import { UserContext } from 'shared/model/userContext';
import { getUserInfo } from 'entities/user';

const UserProvider = ( { children } ) => {
	const [ userInfo, setUserInfo ] = React.useState(null);

	useEffect(() => {
		(async () => {
			setUserInfo(await getUserInfo());
		})();
	}, []);

	if (!userInfo) return null;

	return (
		<UserContext.Provider value={userInfo}>
			{children}
		</UserContext.Provider>
	);
};

export default UserProvider;