import { useEffect, useState } from 'react';
import { getAllUsers } from 'entities/user/api/getAllUsers';

const useAllUsers = () => {
	const [ users, setUsers ] = useState();
	const [ isLoading, setLoading ] = useState(false);

	useEffect(() => {
		(async () => {
			setLoading(true);
			setUsers(await getAllUsers());
			setLoading(false);
		})();
	}, []);

	return { users, isLoading };
};

export default useAllUsers;