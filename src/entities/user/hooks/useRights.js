import { useEffect, useState } from 'react';
import { isAllowed } from '../api/isAllowed';
import useAllUsers from '../hooks/useAllUsers';

const useRights = () => {
	const [ rights, setRights ] = useState(null);
	const [ isLoading, setLoading ] = useState(false);
	const { users } = useAllUsers();

	useEffect(() => {
		if (!users?.length) return;
		(async () => {
			setLoading(true);
			const rights = await isAllowed(
				undefined,
				users.map(( e ) => e.ID)
			);
			setRights(rights);
			setLoading(false);
		})();
	}, [ users ]);

	return { rights, isLoading };
};

export default useRights;