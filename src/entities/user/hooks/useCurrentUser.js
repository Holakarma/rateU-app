import { useEffect, useState } from 'react';
import {
	getCurrentUser
} from 'entities/user/api/getCurrentUser';

const useCurrentUser = () => {
	const [ user, setUser ] = useState(null);
	const [ isLoading, setLoading ] = useState(false);

	useEffect(() => {
		(async () => {
			setLoading(true);
			setUser(await getCurrentUser());
			setLoading(false);
		})();
	}, []);

	return { data: user, isLoading };
};

export default useCurrentUser;