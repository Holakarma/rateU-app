import { useEffect, useState } from 'react';
import { getCriteria } from 'entities/criterion/api/getCriteria';

const useAllCriteria = () => {
	const [ criteria, setCriteria ] = useState();
	const [ isLoading, setLoading ] = useState(false);

	useEffect(() => {
		(async () => {
			await refreshCriteria();
		})();
	}, []);

	const refreshCriteria = async () => {
		setLoading(true);
		setCriteria(await getCriteria(true, true));
		setLoading(false);
	};

	return { criteria, isLoading, refreshCriteria };
};

export default useAllCriteria;
